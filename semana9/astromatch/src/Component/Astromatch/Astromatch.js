import axios from 'axios';
import { baseUrl, baseUrlChoose } from '../../parameters'
import React, { useState, useEffect, useRef } from 'react'
import { Tilt, options, useStyles, MainText, ContainerWhite, ButtonMatch, Container, Text, ButtonsPosition, ProfileImgBackground } from './Style'
import ReactDOM from 'react-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import TinderCard from 'react-tinder-card'

function Astromatch() {
    const classes = useStyles();
    const [profiles, setProfiles] = useState({})

    useEffect(() => {
        getProfiles()
    }, [])


    const getProfiles = async () => {
        try {
            const res = await axios.get(baseUrl)
            setProfiles(res.data.profile)
        } catch (err) {
            alert("Não foi possível carregar os perfis")
        }
    }

    const doMatch = async () => {
        const body = {
            id: profiles.id,
            choice: true
        }
        try {
            const res = await axios.post(baseUrlChoose, body)

            if (res.data) {
                console.log("Deu Match ♥")
            } else { console.log("Não deu Match 😢") }
            getProfiles()
        } catch (err) {
            alert("Ação indisponivel no momento tente novamente mais tarde")
        }

    }

    const doNotMatch = async () => {
        const body = {
            id: profiles.id,
            choice: false
        }
        try {
            await axios.post(baseUrlChoose, body)
            getProfiles()
            console.log("Não deu Match 😢")
        } catch (err) {
            alert("Ação indisponivel no momento tente novamente mais tarde")
        }
    }

    const onSwipe = (direction) => {
        if (direction === 'left' || direction === 'up') {
            doMatch()
        } else if (direction === 'right' || direction === 'down') {
            doNotMatch()
        }
    }

    return (
        <ContainerWhite>
            {profiles.name ? (

                <Tilt
                    options={options}
                >
                    <TinderCard onSwipe={onSwipe} preventSwipe={['right', 'left', 'up', 'down']} >
                        <Container>

                            <ProfileImgBackground photo={profiles.photo} />
                            <ProfileImgBackground src={profiles.photo} />

                            <MainText>
                                <Text title > {profiles.name}, {profiles.age} </Text>
                                <Text >{profiles.bio}</Text>
                            </MainText>

                            <ButtonsPosition>
                                <ButtonMatch onClick={doMatch} > ♥ </ButtonMatch>

                                <ButtonMatch notMatch onClick={doNotMatch} > X </ButtonMatch>
                            </ButtonsPosition>

                        </Container>
                    </TinderCard>
                </Tilt>


            ) : (
                <div className={classes.root}>
                    <CircularProgress color="secondary" />
                </div>
            )
            }
        </ContainerWhite >
    )



}

export default Astromatch
const rootElement = document.getElementById('root');
ReactDOM.render(<Astromatch />, rootElement);
