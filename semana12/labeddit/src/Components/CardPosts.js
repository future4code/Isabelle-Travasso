import React, { useEffect, useContext, useState } from 'react';
import { InputSearch, ContainerButtonFloat, Img, Vote, CardPostSpaceBetween, ContainerScroll, CardPost, Text, ContainerVote, Button } from '../Styles/style'
import { goToAddPosts, goToComments } from '../Router/coordinator';
import { useHistory, useParams } from 'react-router';
import GlobalStateContext from '../Global/GlobalStateContext'
import Pagination from '@material-ui/lab/Pagination';
import { ContainerOptionsButton, Select, ButtonFilter, TextFilter, Container, ContainerPagination, ContainerForm } from '../Styles/style'
import CircularProgress from '@material-ui/core/CircularProgress'
import labedditLogo from '../img/labeddit-logo.png'
import share from '../img/share.png'
import { useForm } from "../Hooks/useForm";
import { useAlert } from "../Hooks/useAlert";
import { initialForm, options } from "../Constants/inputs";
import { baseUrl } from '../Constants/api'

function CardPosts() {
    const [form, onChange, resetForm] = useForm(initialForm)
    const [alert] = useAlert('Voto realizado com sucesso!')
    let { states, setters, requests } = useContext(GlobalStateContext)
    const post = states.posts
    const [filter, setFilter] = useState(post)
    const history = useHistory()
    setters.setLengthPages(Math.ceil(filter.length / states.perPage))
    const paginated = filter.length === 0 ? post.slice(states.start, states.end) : filter.slice(states.start, states.end)

    useEffect(() => {
    }, [paginated])

    const shareUrl = (title, text, url) => {
        navigator.share({
            title: title,
            text: text,
            url: url
        })
            .catch((error) => alert (`❌ Oops! ${error}`));
    }


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
                    return (form.inputSearch && post && post.username && post.username.toLowerCase().includes(form.inputSearch.toLowerCase()))
                } else {
                    return (post)
                }
            })

            .sort((x, y) => {
                if (form.order === 'Posts recentes') {
                    return y.createdAt - x.createdAt
                } else if (form.order === 'Posts antigos') {
                    return x.createdAt - y.createdAt
                } else if (form.order === 'Posts mais votados') {
                    return y.votesCount - x.votesCount
                } else if (form.order === 'Posts menos votados') {
                    return x.votesCount - y.votesCount
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
                    <ContainerForm button option onSubmit={sendForm}>

                        <Select
                            name={"order"}
                            value={form.order}
                            onChange={onChange}
                        >
                            <option value="" disabled>Ordenar</option>
                            {options.map((options) => {
                                return <option value={options} key={options}>{options}</option>
                            })}
                        </Select>

                        <InputSearch 
                            type={"text"}
                            name={"inputSearch"}
                            value={form.inputSearch}
                            placeholder={"Pesquisa por nome "}
                            onChange={onChange}
                        >
                        </InputSearch>
                        <ContainerOptionsButton button option>
                            <ButtonFilter>🔍</ButtonFilter>
                            {alert()}
                            <TextFilter onClick={() => setFilter(post)}>⟲</TextFilter>
                        </ContainerOptionsButton>

                    </ContainerForm>

                    {paginated && paginated.map((post) => {
                        let date = new Date(post.createdAt)
                        return (
                            <CardPost key={post.id}>
                                <CardPostSpaceBetween>
                                    <Text bold name><Img src={labedditLogo}></Img>{post.username}</Text>
                                    <Text>{date.toLocaleDateString('pt-BR')} - {date.toLocaleTimeString()}</Text>
                                    <Img share
                                        src={share}
                                        onClick={() => { shareUrl('Share', 'Compartilhar', `/post/${post.id}`) }}
                                    />
                                </CardPostSpaceBetween>
                                <Text bold>{post.title}</Text>
                                <ContainerScroll>
                                    <Text>{post.text}</Text>
                                </ContainerScroll>
                                <CardPostSpaceBetween responsive>
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
            <ContainerButtonFloat>
                <Button add onClick={() => goToAddPosts(history)}>+</Button>
            </ContainerButtonFloat>
        </Container >
    )
}

export default CardPosts