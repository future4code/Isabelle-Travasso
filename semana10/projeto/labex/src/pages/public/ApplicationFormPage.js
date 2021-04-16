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
            "name": form.name,
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
               
                <Input
                    required
                    type="text"
                    name={'name'}
                    value={form.name} onChange={onChange}
                    placeholder={"Nome Completo"}
                    title={'Nome inválido'}
                    pattern={"^([a-zA-Z]|[à-ú]|[À-Ú]|[ ])+$"} />

                <Input
                    required
                    type="number"
                    name={'age'}
                    value={form.age} onChange={onChange}
                    placeholder={"Idade"}
                    title={'formato de idade inválido'}
                    min={18}
                    pattern={"^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$"} />

                <Input
                    required
                    type="text"
                    name={'text'}
                    value={form.text} onChange={onChange}
                    placeholder={"Texto de Cantidatura"}
                    pattern={`^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$`}
                    title={"Cuidado com os caracteres especiais"} />
                    
                <Input
                    required
                    type="text"
                    name={'profession'}
                    value={form.profession} onChange={onChange}
                    placeholder={"Profissão"}
                    title={'A profissão deve ter no mínimo 3 caracteres, sem acento'}
                    pattern={"([a-zA-Z]*[a-zA-Z]||[ ]){3,}[a-zA-Z0-9]*$"} />

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