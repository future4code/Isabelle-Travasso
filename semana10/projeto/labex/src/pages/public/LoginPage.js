import React, { useEffect } from 'react'
import { baseUrl, body } from '../../constants/api'
import axios from 'axios';
import { initialForm } from "../../constants/inputs";
import { Container, ContainerInput, Input, Button, Title } from '../../styles/style'
import { useHistory } from 'react-router';
import { goToHomeAdmin, goToLogin } from '../../Router/coordinator'
import { useForm } from "../../hooks/useForm";

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
            goToHomeAdmin(history)
        } catch (err) {
            alert('Usuário e/ou senha icorretos!')
        }
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log(e)
        login()
    }

    return (
        <Container>
            <Title>Acesso do Administrador</Title>
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

                <Button>Entrar</Button>
            </ContainerInput>
        </Container>
    );
}

export default LoginPage;
