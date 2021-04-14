import React from 'react'
import useInput from "../../hooks/useInputs";
import { ContainerInput, Input, Button, Title } from '../../styles/style'
import { useHistory } from 'react-router';
import { goToHomeAdmin } from '../../Router/coordinator'

function ApplicationFormPage() {
    const [name, handleName] = useInput()
    const [age, handleAge] = useInput()
    const [text, handleText] = useInput()
    const [profession, handleProfission] = useInput()

    return (
        <div>
            <select>
                <option>Escolha uma Viagem</option>
            </select>
            <input value={name} onChange={handleName} placeholder={"Nome"} />
            <input value={age} onChange={handleAge} placeholder={"Idade"} />
            <input value={text} onChange={handleText} placeholder={"Texto de Cantidatura"} />
            <input value={profession} onChange={handleProfission} placeholder={"Profissão"} />
            <select>
                <option>Escolha um País</option>
            </select>
            <div>
                <button>Enviar</button>
            </div>

        </div>
    );
}

export default ApplicationFormPage;