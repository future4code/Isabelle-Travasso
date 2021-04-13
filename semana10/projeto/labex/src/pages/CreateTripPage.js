import React from 'react';
import useInput from "../hooks/useInputs";

function CreateTripPage() {
    const [name, handleName] = useInput()
    const [date, handleDate] = useInput()
    const [text, handleText] = useInput()
    const [time, handleTime] = useInput()

    return (
        <div>
            <h1>Criar Viagem</h1>
            <input value={name} onChange={handleName} placeholder={"Nome"} />
            <select>
                <option>Escolha um Planeta</option>
            </select>
            <input value={date} onChange={handleDate} placeholder={"dd / mm / aaaa"} />
            <input value={text} onChange={handleText} placeholder={"descrição"} />
            <input value={time} onChange={handleTime} placeholder={"Duração em dias"} />

            <button>Criar</button>


        </div>
    );
}

export default CreateTripPage;
