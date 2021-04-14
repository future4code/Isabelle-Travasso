import React from 'react';
import useInput from "../../hooks/useInputs";
import React from 'react'
import { ContainerInput, Title, Container, Button, Input } from '../../styles/style'
import { useProtectedPage } from '../../hooks/useProtectedPage'
    

function CreateTripPage() {
    useProtectedPage()

    const [name, handleName] = useInput()
    const [date, handleDate] = useInput()
    const [text, handleText] = useInput()
    const [time, handleTime] = useInput()

    const onKeyDown = (e) => {
        if (e.keyCode === 'Enter' || e.keyCode === 13) {
            
        }
    }

    return (
        <ContainerInput>
            <Title>Criar Viagem</Title>
            <Input value={name} onChange={handleName} placeholder={"Nome"} />
            <select>
                <option>Escolha um Planeta</option>
            </select>
            <Input value={date} onChange={handleDate} placeholder={"dd / mm / aaaa"} />
            <Input value={text} onChange={handleText} placeholder={"descrição"} />
            <Input value={time} onChange={handleTime} placeholder={"Duração em dias"} />

            <Button>Criar</Button>


        </ContainerInput>
    );
}

export default CreateTripPage;
