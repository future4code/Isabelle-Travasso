import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import GlobalStateContext from "../Global/GlobalStateContext";
import { baseUrl, axiosConfig } from '../Constants/api'
import axios from 'axios';
import { goToRegister, goToAddPosts, gotToLastPage, goToLogin } from '../Router/coordinator';
import { Button } from '../Styles/style'

const GlobalStateProvider = (props) => {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(0)
    const [perPage, setPerPage] = useState(10)
    const [lengthPages, setLengthPages] = useState()
    const [alert, setAlert] = useState(false)
    const history = useHistory()

    useEffect(() => {
        getPosts()
    }, [posts, page, perPage])

    const logout = () => {
        window.localStorage.removeItem("token");
        goToLogin(history);
    };

    const buttonNav = (path) => {
        switch (path) {
            case '/':
                return (
                    <div>
                        <Button onClick={() => goToRegister(history)}>Inscreva-se</Button>
                    </div>
                )
            case '/signup':
                return (
                    <div>
                        <Button onClick={() => goToLogin(history)}>Login</Button>
                    </div>
                )
            case '/feed':
                return (
                    <div>
                        <Button onClick={() => goToAddPosts(history)}>Criar Post</Button>
                        <Button logout onClick={logout}>Logout</Button>
                    </div>
                )
            default:
                return (
                    <div>
                        <Button back onClick={() => gotToLastPage(history)}>Voltar</Button>
                    </div>
                )
        }

    }

    const getPosts = async () => {
        try {
            const res = await axios.get(`${baseUrl}/posts`, axiosConfig)
            setPosts(res.data.posts)
        } catch (err) {
            alert(`❌ ${err.response.data.message}`)
        }
    }

    const votePost = async (vote, id) => {
        const body = {
            direction: vote
        }
        try {
            await axios.put(`${baseUrl}/posts/${id}/vote`, body, axiosConfig)
            setAlert(true)
        } catch (err) {
            alert(`❌ ${err.response.data.message}`)
        }
    }


    let start = page * perPage
    let end = start + perPage

    const states = { alert, start, end, posts, perPage, page, lengthPages };
    const setters = { setAlert, setPerPage, setPage, setLengthPages };
    const requests = { getPosts, votePost, buttonNav };

    const data = { states, setters, requests };

    return (
        <div>
            <GlobalStateContext.Provider value={data}>
                {props.children}
            </GlobalStateContext.Provider>
        </div>
    );
};

export default GlobalStateProvider;