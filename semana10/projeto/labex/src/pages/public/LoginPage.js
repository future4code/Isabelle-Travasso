import React, { useEffect } from 'react'
import { baseUrl } from '../../constants/api'
import axios from 'axios';
import useInput from "../../hooks/useInputs";
import { ContainerInput, Input, Button, Title } from '../../styles/style'
import { useHistory } from 'react-router';
import { goToHomeAdmin, goToLogin } from '../../Router/coordinator'

function LoginPage() {
    const history = useHistory()

    const [email, handleEmail] = useInput()
    const [password, handlePassword] = useInput()

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            goToLogin(history)
        }
    }, [history])

    const login = async () => {
        const body = {
            email: email,
            password: password
        }
        try {
            const res = await axios.post(`${baseUrl}/login`, body)
            localStorage.setItem('token', res.data.token)
            goToHomeAdmin(history)
        } catch (err) {
            alert('Usuário e/ou senha icorretos!')
        } 
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 'Enter' || e.keyCode === 13) {
            login()
        }
    }

    return (
        <ContainerInput>
            <Title>Acesso do Administrador</Title>
            <Input type='email' value={email} onChange={handleEmail} placeholder={"E-mail"} onKeyDown={onKeyDown} />
            <Input type='password' value={password} onChange={handlePassword} placeholder={"Senha"} onKeyDown={onKeyDown} />

            <Button onClick={login}>Entrar</Button>
        </ContainerInput>
    );
}

export default LoginPage;
