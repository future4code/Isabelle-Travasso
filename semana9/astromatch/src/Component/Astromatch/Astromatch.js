import axios from 'axios';
import { baseUrl, baseUrlChoose } from '../../parameters'
import React, { useState, useEffect } from 'react'
import { ContainerWhite, Divider, ButtonMatch, Container, Text, ButtonNotMatch, ButtonsPosition, ContainerProfile, ProfileImgBackground, MainText } from './style'
import Paper from '@material-ui/core/Paper';


function Astromatch(props) {

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
            const res = await axios.post(baseUrlChoose, body)
            getProfiles()
            console.log("Não deu Match 😢")
        } catch (err) {
            alert("Ação indisponivel no momento tente novamente mais tarde")
        }
    }

    return (
        <ContainerWhite>
            
            {profiles.photo ? (
                <Container>
                    <Paper elevation={3} ><ProfileImgBackground src={profiles.photo} /></Paper>
                    <MainText>
                        <Text title heavy large> {profiles.name}, {profiles.age} </Text>
                        <Divider />
                        <Text bold small>{profiles.bio}</Text>
                    </MainText>
                    <ButtonsPosition>
                        <ButtonMatch onClick={doMatch}> ♥ </ButtonMatch>

                        <ButtonNotMatch onClick={doNotMatch}> X </ButtonNotMatch>
                    </ButtonsPosition>


                </Container>
            ) : (
                <p>Carregando...</p>
            )}
        </ContainerWhite>
    )



}

export default Astromatch