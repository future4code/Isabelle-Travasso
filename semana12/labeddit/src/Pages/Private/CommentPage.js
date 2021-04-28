import React, { useEffect, useState } from 'react';
import { baseUrl, axiosConfig } from '../../Constants/api'
import axios from 'axios';
import { useParams } from 'react-router';
import { Img, ContainerInput, InputComment, Container, CardPostSpaceBetween, ContainerScroll, CardPost, Text, ContainerVote, Button, Title } from '../../Styles/style'
import { initialForm } from "../../Constants/inputs";
import { useForm } from "../../Hooks/useForm";
import CircularProgress from '@material-ui/core/CircularProgress'
import labedditLogo from '../../img/labeddit-logo.png'

function CardPosts() {
    const [form, onChange, resetForm] = useForm(initialForm)
    const pathParams = useParams()
    const postId = pathParams.postId
    const [postDetail, setPostDetail] = useState({})
    let date = new Date(postDetail.createdAt)

    useEffect(() => {
        getPostDetail()
    }, [postDetail])

    const getPostDetail = async () => {
        try {
            const res = await axios.get(`${baseUrl}/posts/${postId}`, axiosConfig)
            setPostDetail(res.data.post)
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    const getComment = async () => {
        const body = {
            "text": form.comment,
        }
        try {
            await axios.post(`${baseUrl}/posts/${postId}/comment`, body, axiosConfig)
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        getComment()
        resetForm()
    }

    return (
        <Container>

            {postDetail.id ? (
                <>
                    <Title>Detalhes do post</Title>
                    <CardPost>
                        <CardPostSpaceBetween>
                            <Text bold name><Img big src={labedditLogo}></Img>{postDetail.username}</Text>
                            <Text>{date.toLocaleDateString('pt-BR')} - {date.toLocaleTimeString()}</Text>
                        </CardPostSpaceBetween>
                        <Text bold>{postDetail.title}</Text>
                        <ContainerScroll>
                            <Text>{postDetail.text}</Text>
                        </ContainerScroll>
                        <CardPostSpaceBetween>
                            <Text>{postDetail.votesCount} votos</Text>
                            <Text>{postDetail.commentsCount} comentários</Text>
                        </CardPostSpaceBetween>


                        <ContainerInput onSubmit={onSubmitForm}>
                            <InputComment
                                comment
                                type={'text'}
                                name={'comment'}
                                value={form.comment}
                                onChange={onChange}
                                placeholder={"Comentário"}
                                required
                            />


                            <Button main>Comentar</Button>
                        </ContainerInput>
                    </CardPost>

                    <Title>Comentários</Title>
                    {postDetail && postDetail.comments && postDetail.comments.map((post) => {
                        let dateComment = new Date(post.createdAt)
                        return (
                            <CardPost comment key={post.id}>
                                <CardPostSpaceBetween>
                                    <Text bold name><Img src={labedditLogo}></Img>{post.username}</Text>
                                    <Text>{dateComment.toLocaleDateString('pt-BR')} - {dateComment.toLocaleTimeString()}</Text>
                                </CardPostSpaceBetween>
                                <Text bold>{post.title}</Text>
                                <ContainerScroll>
                                    <Text>{post.text}</Text>
                                </ContainerScroll>
                            </CardPost>
                        )
                    })}
                </>
            ) : (
                <Container progress>
                    <CircularProgress />
                </Container>
            )
            }
        </Container >
    )
}

export default CardPosts