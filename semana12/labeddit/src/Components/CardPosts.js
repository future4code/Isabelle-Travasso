import React, { useEffect, useContext } from 'react';
import { Input, ContainerButton, Avatar, Vote, CardPostSpaceBetween, ContainerScroll, CardPost, Text, ContainerVote, Button, ContainerInput } from '../Styles/style'
import { goToAddPosts, goToComments } from '../Router/coordinator';
import { useHistory } from 'react-router';
import GlobalStateContext from '../Global/GlobalStateContext'
import Pagination from '@material-ui/lab/Pagination';
import { Select, Container, ContainerPagination, Title } from '../Styles/style'
import CircularProgress from '@material-ui/core/CircularProgress'
import labedditLogo from '../img/labeddit-logo.png'
import { useForm } from "../Hooks/useForm";
import { initialForm } from "../Constants/inputs";

function CardPosts() {
    const [form, onChange, resetForm] = useForm(initialForm)
    let { states, setters, requests } = useContext(GlobalStateContext)
    const history = useHistory()
    const post = states.posts

    let start = states.page * states.perPage
    let end = start + states.perPage
    const paginated = post.slice(start, end)

    useEffect(() => {
        requests.getPosts()
    }, [post])

    const handleChange = (e, value) => {
        setters.setPage(value)
    }

    const orderDate = () => {

        const ordered = paginated && paginated.sort((x, y) =>
            form.order === 'Crescente' ? x.createdAt - y.createdAt : y.createdAt - x.createdAt
        )
        return ordered;

    }

    const filterName = () => {

        const filter = paginated.filter((post) => {
            if (form.inputSearch) {
                return (form.inputSearch && post.name.includes(form.inputSearch))
            } else {
                return true
            }
        })

        return (
            filter
        )
    }

    console.log(filterName())

    const sendForm = (e) => {
        e.preventDefault()
        resetForm()
        // orderDate()
        filterName()
    }

    console.log(paginated)

    return (
        <Container>
            {post && post.length === 0 ? <Container progress><CircularProgress /></Container> : (
                <>
                    <ContainerInput onSubmit={sendForm}>
                        <Input
                            type="text"
                            name="name"
                            value={form.inputSearch}
                            label="Pesquisar por nome"
                            onChange={onChange}
                        >
                        </Input>
                    </ContainerInput>

                    <label>Ordenar por: </label>
                    <select
                        name={'order'}
                        value={form.order}
                        onChange={onChange}
                    >
                        <option value="Crescente">Mais antigos </option>
                        <option value="Decrescente">Mais recentes </option>
                    </select>

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

            )
            }
            <ContainerButton>
                <Button add onClick={() => goToAddPosts(history)}>+</Button>
            </ContainerButton>
        </Container >
    )
}

export default CardPosts