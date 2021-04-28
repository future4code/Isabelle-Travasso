import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import GlobalStateContext from "../Global/GlobalStateContext";
import { baseUrl, axiosConfig } from '../Constants/api'
import axios from 'axios';

const GlobalStateProvider = (props) => {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(0)
    const [perPage, setPerPage] = useState(10)
    const [lengthPages, setLengthPages] = useState()
    const [alert, setAlert] = useState(false)
   
    useEffect(() => {
        getPosts()
    }, [posts, page, perPage])

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
    const setters = { setAlert, setPerPage, setPage, setLengthPages};
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