import axios from 'axios';
import { baseUrl, baseUrlChoose } from '../../parameters'
import React, { useState, useEffect } from 'react'
import { Tilt, options, useStyles, MainImg, ContainerWhite, ButtonMatch, Container, Text, ButtonsPosition, ProfileImgBackground } from './Style'
import ReactDOM from 'react-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

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
            await axios.post(baseUrlChoose, body)
            getProfiles()
            console.log("Deu Match ♥")
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

    return (
        <ContainerWhite>

            {profiles.name ? (
                <Tilt
                    options={options}
                >
                    <Container>

                        <ProfileImgBackground src={profiles.photo} />
                        <MainImg>
                            <Text title > {profiles.name}, {profiles.age} </Text>
                            <Text >{profiles.bio}</Text>
                        </MainImg>
                        <ButtonsPosition>
                            <ButtonMatch onClick={doMatch}> ♥ </ButtonMatch>

                            <ButtonMatch notMatch onClick={doNotMatch}> X </ButtonMatch>
                        </ButtonsPosition>


                    </Container>
                </Tilt>

            ) : (
                <div className={classes.root}>
                    <CircularProgress color="secondary" />
                </div>
            )}
        </ContainerWhite>
    )



}

export default Astromatch
const rootElement = document.getElementById('root');
ReactDOM.render(<Astromatch />, rootElement);
