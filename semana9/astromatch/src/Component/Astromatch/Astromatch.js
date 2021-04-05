import axios from 'axios';
import { baseUrl, baseUrlChoose } from '../../parameters'
import React, { useState, useEffect } from 'react'
import { ButtonMatch } from './style'

function Astromatch(props) {

    const [profiles, setProfiles] = useState('')

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
        <div>
                <img src={profiles.photo}></img>
                <p> {profiles.name}, {profiles.age}</p>

                <p>{profiles.bio}</p>   

                <ButtonMatch onClick={doMatch}> ♥ </ButtonMatch>

                <ButtonMatch onClick={doNotMatch}> X </ButtonMatch>
            
        </div>
    )



}

export default Astromatch