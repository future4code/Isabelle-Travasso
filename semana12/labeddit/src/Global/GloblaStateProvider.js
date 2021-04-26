import React, { useEffect, useState } from 'react';
import {  Button } from '../Styles/style'
import { goToRegister, goToAddPosts, gotToLastPage, goToLogin } from '../Router/coordinator';
import { useHistory } from 'react-router';
import GlobalStateContext from "../Global/GlobalStateContext";
import { baseUrl, axiosConfig } from '../Constants/api'
import axios from 'axios';

const GlobalStateProvider = (props) => {
    const history = useHistory()
    const [posts, setPosts] = useState()
    // const [path, setPath] = useState()

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        try {
            const res = await axios.get(`${baseUrl}/posts`, axiosConfig)
            setPosts(res.data.posts)
            console.log(res.data.posts)
        } catch (err) {
            alert(err.response.data.message)
        }
    }


    const states = { posts };
    const setters = { setPosts };
    const requests = { getPosts };

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