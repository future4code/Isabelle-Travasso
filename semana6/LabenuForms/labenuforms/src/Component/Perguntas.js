import React from 'react'
import styled from 'styled-components'

const CentralizaPergunta = styled.p`
    display: flex;
    justify-content: center;
    justify-items: center;
`

export default function Perguntas(props) {
    return (
        <div>
            <CentralizaPergunta>{props.pergunta}</CentralizaPergunta>
            <CentralizaPergunta><input onChange={props.onChange} value={props.value} /></CentralizaPergunta>
        </div>
    )
}
