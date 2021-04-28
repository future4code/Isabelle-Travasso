import React, { useEffect } from 'react'
import { baseUrl } from '../../Constants/api'
import axios from 'axios';
import { initialForm } from "../../Constants/inputs";
import { Container, ContainerInput, Input, Button, Title, Text } from '../../Styles/style'
import { useHistory } from 'react-router-dom';
import { goToFeed, goToLogin, goToRegister } from '../../Router/coordinator'
import { useForm } from "../../Hooks/useForm";

function LoginPage() {
    const history = useHistory()
    const [form, onChange] = useForm(initialForm)

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            goToLogin(history)
        }
    }, [history])

    const login = async () => {
        const body = {
            'email': form.email,
            'password': form.password
        }

        try {
            const res = await axios.post(`${baseUrl}/login`, body)
            localStorage.setItem('token', res.data.token)
            goToFeed(history)
        } catch (err) {
            alert(`❌ ${err.response.data.message}`)

        }
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        login()
    }


    return (
        <Container>
            <Title>Acessar Conta </Title>
            <ContainerInput onSubmit={onSubmitForm}>
                <Input
                    type={'email'}
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    placeholder={"E-mail"}
                    pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
                    title={"E-mail inválido"}
                    required
                />
                <Input
                    type={'password'}
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    placeholder={"Senha"}
                    pattern={"\\w{6,}"}
                    title={"A senha deve conter no mínimo 6 caracteres"}
                    required
                />

                <Button main>Entrar</Button>
            </ContainerInput>
            <ContainerInput register> Novo por aqui? <Text link onClick={() => goToRegister(history)}> Crie sua conta</Text></ContainerInput>
        </Container>
    );
}

export default LoginPage;