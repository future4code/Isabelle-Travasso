import React, { useEffect } from 'react'
import { baseUrl } from '../../Constants/api'
import axios from 'axios';
import { initialForm } from "../../Constants/inputs";
import { Container, ContainerInput, Input, Button, Title, Text } from '../../Styles/style'
import { useHistory } from 'react-router-dom';
import { goToFeed, goToLogin, goToRegister } from '../../Router/coordinator'
import { useProtectedPage } from '../../Hooks/useProtectedPage'

function PostsPage() {
    useProtectedPage()

    return(
        <Container>

        </Container>
    )
}
export default PostsPage
