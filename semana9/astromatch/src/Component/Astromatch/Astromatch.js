import axios from 'axios';
import { baseUrl, baseUrlChoose } from '../../parameters'
import React, { useState, useEffect } from 'react'
import { ButtonMatch, ProfileName, ProfileDetails, ButtonNotMatch, ButtonsPosition, ContainerProfile, ImgProfile } from './style'



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
        <ContainerProfile>
            {profiles.photo ? (
                <>
            <ContainerProfile>
                <ImgProfile src={profiles.photo}></ImgProfile>
                <ProfileName> {profiles.name}, {profiles.age}</ProfileName>

                <ProfileDetails>{profiles.bio}</ProfileDetails>
            </ContainerProfile>
            <ButtonsPosition>
                <ButtonMatch onClick={doMatch}> ♥ </ButtonMatch>

                <ButtonNotMatch onClick={doNotMatch}> X </ButtonNotMatch>
            </ButtonsPosition>
            </>
            ) : (
                <p>Carregando...</p>
            )}
        </ContainerProfile>
    )



}

export default Astromatch