import React from 'react'
import { Container, ContainerInput, Input, Button, Title, Select } from '../../styles/style'
import { countries } from '../../constants/options'
import axios from 'axios';
import { baseUrl } from '../../constants/api'
import { initialForm } from '../../constants/inputs'
import { useForm } from "../../hooks/useForm";
import { useGetApi } from "../../hooks/useGetApi";

function ApplicationFormPage() {
    const [form, onChange, resetForm] = useForm(initialForm)
    const [tripList] = useGetApi([])

    const sendForm = (e) => {
        e.preventDefault()
        sendApplication()
        resetForm()
    }

    const sendApplication = async () => {
        const bodyAply = {
            "name": form.trips,
            "age": form.age,
            "applicationText": form.text,
            "profession": form.profession,
            "country": form.country
        }

        try {
            await axios.post(`${baseUrl}/trips/${form.trips}/apply`, bodyAply)
            alert("Formulário foi enviado!")
        } catch (err) {
            alert("Formulário não foi enviado!")
        }
    }

    const tripsOptions = tripList.map((trip) => {
            return (
                <option key={trip.id} value={trip.id}>{trip.name}</option>
            )
    })

    return (
        <Container>
            <Title>Inscreva-se para uma viagem</Title>
            <ContainerInput onSubmit={sendForm}>
                <Select
                    name={"trips"}
                    value={form.trips}
                    onChange={onChange}
                    required
                >
                    <option value="" disabled>Escolha uma Viagem</option>
                    {tripsOptions}
                </Select>
                <Input type="text" name={'name'} value={form.name} onChange={onChange} placeholder={"Nome Completo"} title={'Nome deve ter nome inválido, cada nome deve conter ao menos 2 caracteres'} pattern={"^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16}"} />
                <Input type="number" name={'age'} value={form.age} onChange={onChange} placeholder={"Idade"} title={'formato de idade inválido'} pattern={"^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$"} />
                <Input type="text" name={'text'} value={form.text} onChange={onChange} placeholder={"Texto de Cantidatura"} title={'A canditatura deve ter no mínimo 10 caracteres'} min={10} />
                <Input type="text" name={'profession'} value={form.profession} onChange={onChange} placeholder={"Profissão"} title={'A profissão nao pode conter números'} pattern={"^([a-zA-Z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)"} />
                <Select
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                    required
                >
                    <option value="" disabled>Escolha um País</option>
                    {countries.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                    })}
                </Select>

                <Button>Enviar</Button>
            </ContainerInput>

        </Container>
    );
}

export default ApplicationFormPage;