import React, { Component } from 'react'
import styled from 'styled-components'

const CentralizaPergunta = styled.p`
    display: flex;
    justify-items: center;
    justify-content: center;
`

export default function Opcoes(props) {
    
    return(
    <div>
        <CentralizaPergunta>{props.pergunta}</CentralizaPergunta>
        <CentralizaPergunta>
        <select>
            {props.opcoes.map(opcao => (
            <option value={opcao}>{opcao}</option>
            ))}
        </select>
        </CentralizaPergunta>
    </div>
    )
            
}

