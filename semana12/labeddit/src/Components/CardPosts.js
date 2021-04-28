import React, { useEffect, useContext, useState } from 'react';
import { Input, ContainerButton, Avatar, Vote, CardPostSpaceBetween, ContainerScroll, CardPost, Text, ContainerVote, Button, ContainerInput } from '../Styles/style'
import { goToAddPosts, goToComments } from '../Router/coordinator';
import { useHistory } from 'react-router';
import GlobalStateContext from '../Global/GlobalStateContext'
import Pagination from '@material-ui/lab/Pagination';
import { ButtonFilter, TextFilter, Container, ContainerPagination } from '../Styles/style'
import CircularProgress from '@material-ui/core/CircularProgress'
import labedditLogo from '../img/labeddit-logo.png'
import { useForm } from "../Hooks/useForm";
import { initialForm } from "../Constants/inputs";

function CardPosts() {
    const [form, onChange, resetForm] = useForm(initialForm)
    let { states, setters, requests } = useContext(GlobalStateContext)
    const post = states.posts
    const [filter, setFilter] = useState(post)
    const history = useHistory()
    const paginated = filter.slice(states.start, states.end)
    setters.setLengthPages(Math.ceil(filter.length / states.perPage))

    useEffect(() => {
        requests.getPosts()
    }, [paginated])

    const handleChange = (e, value) => {
        setters.setPage(value)
    }
    
    const sendForm = (e) => {
        e.preventDefault()
        filterName()
        resetForm()
    }

    const filterName = () => {

        let filtered = post

            .filter((post) => {
                if (form.inputSearch) {
                    return (form.inputSearch && post && post.username && post.username.includes(form.inputSearch))
                } else {
                    return (post)
                }

            })

        return (
            setFilter(filtered)
        )
    }

    return (
        <Container>

            {post && post.length === 0 ? <Container progress><CircularProgress /></Container> : (
                <>
                    <ContainerInput register onSubmit={sendForm}>
                        <Input
                            type={"text"}
                            name={"inputSearch"}
                            value={form.inputSearch}
                            placeholder={"Pesquisa por nome "}
                            onChange={onChange}
                        >
                        </Input>
                        <ButtonFilter>🔍</ButtonFilter>
                        <TextFilter  onClick={() => setFilter(post)}>⟲</TextFilter>
                    </ContainerInput>
                    

                    {paginated && paginated.map((post) => {
                        let date = new Date(post.createdAt)
                        return (
                            <CardPost key={post.id}>
                                <CardPostSpaceBetween>
                                    <Text bold name><Avatar src={labedditLogo}></Avatar>{post.username}</Text>
                                    <Text>{date.toLocaleDateString('pt-BR')} - {date.toLocaleTimeString()}</Text>
                                </CardPostSpaceBetween>
                                <Text bold>{post.title}</Text>
                                <ContainerScroll>
                                    <Text>{post.text}</Text>
                                </ContainerScroll>
                                <CardPostSpaceBetween>
                                    <ContainerVote>
                                        <Vote up onClick={() => requests.votePost(1, post.id)}> 👍 </Vote> <Text bold> {post.votesCount} votos</Text><Vote onClick={() => requests.votePost(-1, post.id)}>👎</Vote>
                                    </ContainerVote>
                                    <Button onClick={() => goToComments(history, post.id)}>{post.commentsCount} Comentários</Button>
                                </CardPostSpaceBetween>
                            </CardPost>
                        )
                    })}

                    <ContainerPagination>
                        <Pagination
                            count={states.lengthPages}
                            variant="outlined"
                            color="primary"
                            page={states.page}
                            onChange={handleChange}
                        />
                    </ContainerPagination>
                </>
            )}
            <ContainerButton>
                <Button add onClick={() => goToAddPosts(history)}>+</Button>
            </ContainerButton>
        </Container >
    )
}

export default CardPosts