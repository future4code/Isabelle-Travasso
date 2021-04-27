import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import GlobalStateContext from "../Global/GlobalStateContext";
import { baseUrl, axiosConfig } from '../Constants/api'
import axios from 'axios';

const GlobalStateProvider = (props) => {
    const history = useHistory()
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(0)
    const [perPage, setPerPage] = useState(10)
    const [lengthPages, setLengthPages] = useState()

    useEffect(() => {
        getPosts()
    }, [posts])

    const getPosts = async () => {
        try {
            const res = await axios.get(`${baseUrl}/posts`, axiosConfig)
            setPosts(res.data.posts)
            setLengthPages(Math.ceil(res.data.posts.length / perPage))
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    const votePost = async (vote, id) => {
        const body = {
            direction: vote
        }
        try {
            const res = await axios.put(`${baseUrl}/posts/${id}/vote`, body, axiosConfig)
            alert('voto realizado com sucesso.')
        } catch (err) {
            alert(err.response.data.message)
        }
    }


    const states = { posts, perPage, page, lengthPages };
    const setters = { setPerPage, setPage };
    const requests = { getPosts, votePost };

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