import React from 'react';
import { useForm } from "../../hooks/useForm";
import { Container, ContainerInput, Title, Select, Button, Input } from '../../styles/style'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { planets } from '../../constants/options'
import { axiosConfig, baseUrl, bodyCreate } from '../../constants/api'
import { initialForm } from '../../constants/inputs'
import axios from 'axios';

function CreateTripPage() {
    useProtectedPage()

    const [form, onChange, resetForm] = useForm(initialForm)

    const onSubmitForm = (e) => {
        e.preventDefault()
        createTrip()
        resetForm()
    }

    const createTrip = async () => {
        const bodyCreate = {
            "name": form.trips,
            "planet": form.planet,
            "date": form.date,
            "description": form.text,
            "durationInDays": form.time
        }

        try {
            await axios.post(`${baseUrl}/trips`, bodyCreate, axiosConfig)

            alert("Viagem criada!")

        } catch (err) {

            alert("Erro na criação da viagem!")
        }
    }

    return (
        <Container>
            <Title>Criar Viagem</Title>
            <ContainerInput onSubmit={onSubmitForm}>
                <Input
                    required
                    type={'text'}
                    name={"trips"}
                    min={3}
                    value={form.trips}
                    onChange={onChange}
                    placeholder={"Nome"}
                    title={'Nome deve ter no mínimo 3 caracteres'}
                />

                <Select
                    name={"planet"}
                    value={form.planet}
                    onChange={onChange}
                    required
                >
                    <option value='' disabled>Escolha um Planeta</option>
                    {planets.map((planet) => {
                        return <option value={planet} key={planet}>{planet}</option>
                    })}

                </Select>
                <Input
                    value={form.date}
                    name={"date"}
                    onChange={onChange}
                    placeholder={"dd / mm / aaaa"}
                    pattern={"[0-9]{1,2}(/|-)[0-9]{1,2}(/|-)[0-9]{4}"}
                    required
                    type={"date"}
                />

                <Input
                    value={form.text}
                    onChange={onChange}
                    name={"text"}
                    placeholder={"Descrição"}
                    required
                    type={'text'}
                    min={6}
                    title={"A descrição deve conter no mínimo 6 caracteres"}
                />

                <Input
                    value={form.time}
                    onChange={onChange}
                    name={"time"}
                    placeholder={"Duração em dias"}
                    required
                    type={'number'}
                    pattern={"[0-9]+"}
                    title={"A duração deve ser escrita apenas com números"}
                />

                <Button>Criar</Button>
            </ContainerInput>

        </Container>
    );
}

export default CreateTripPage;
