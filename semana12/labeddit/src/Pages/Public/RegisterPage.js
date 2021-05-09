import React, { useContext } from 'react';
import { baseUrl } from '../../Constants/api'
import axios from 'axios';
import { initialForm } from "../../Constants/inputs";
import { Container, ContainerInput, Input, Button, Title } from '../../Styles/style'
import { useForm } from "../../Hooks/useForm";
import { useAlert } from "../../Hooks/useAlert";
import GlobalStateContext from '../../Global/GlobalStateContext'

function RegisterPage() {
    const [form, onChange, resetForm] = useForm(initialForm)
    let { setters } = useContext(GlobalStateContext)
    const [alert] = useAlert('Cadastro realizado com sucesso!')

    const register = async () => {
        const body = {
            'email': form.email,
            'password': form.password,
            'username': form.name
        }

        try {
            await axios.post(`${baseUrl}/signup`, body)
            setters.setAlert(true)
        } catch (err) {
            alert('❌ Não foi possivel realizar o seu cadastro, tente novamente mais tarde')
        }
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        register()
        resetForm()
    }


    return (
        <Container>
            <Title>Cadastrar-se</Title>
            <ContainerInput onSubmit={onSubmitForm}>
                <Input
                    type={'text'}
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    placeholder={"Name do usuário"}
                    pattern={"^([a-zA-Z]|[à-ú]|[À-Ú]|[ ])+$"}
                    title={"Nome inválido"}
                    required
                />
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

                <Button main>Cadastrar</Button>
            </ContainerInput>
            {alert()}
        </Container>
    );
}

export default RegisterPage;