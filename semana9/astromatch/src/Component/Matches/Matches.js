import axios from 'axios';
import {baseUrlMatch} from  '../../parameters'
import React, { useState, useEffect } from 'react'
// import styled from 'styled-components';

export function Matches(props) {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [])


    const getMatches = async () => {
         
        try{
        const res = await axios.get(baseUrlMatch)
            
         setMatches(res.data.matches)
        } catch (err) {
            alert("Não foram encontrados Matchs na sua conta")
        }
    }

    return(
        <div>
            {matches.map((match) => {
                return(
                    <div>
                        <img src={match.photo}></img>
                        <p>{match.name}</p>
                    </div>
                )
            })}
        </div>
    )

}

export default Matches