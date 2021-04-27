import React from 'react'
import { baseUrl, axiosConfig } from '../../Constants/api'
import axios from 'axios';
import { initialForm } from "../../Constants/inputs";
import { Container, ContainerInput, Input, Button, Title, Text } from '../../Styles/style'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { useForm } from "../../Hooks/useForm";

function PostsPage() {
    useProtectedPage()
    const [form, onChange, resetForm] = useForm(initialForm)

    const postPost = async () => {
        const body = {
            "text": form.text,
            "title": form.title
        }
        try {
            await axios.post(`${baseUrl}/posts`, body, axiosConfig)
            alert(" ✅ Conteúdo postado com sucesso!")
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        postPost()
        resetForm()
    }

    return(
        <Container>
            <Title> Crie seu Post! </Title>
            <ContainerInput onSubmit={onSubmitForm}>
                <Input
                    type={'text'}
                    name={'title'}
                    value={form.title}
                    onChange={onChange}
                    placeholder={"Título do post"}
                    required
                />
                <Input
                    type={'text'}
                    name={'text'}
                    value={form.text}
                    onChange={onChange}
                    placeholder={"Conteúdo do Post"}
                    required
                />

                <Button main>Enviar</Button>
            </ContainerInput>
        </Container>
    )
}
export default PostsPage
