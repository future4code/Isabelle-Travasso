import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, ContainerInput, Input, Button, Title, Text } from '../../Styles/style'
import { useHistory } from 'react-router-dom';
import { goToFeed, goToLogin, goToRegister } from '../../Router/coordinator'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { baseUrl, axiosConfig } from '../../Constants/api'

function FeedPage() {
    useProtectedPage()

    return (
        <Container>
            <Title>Acessar Conta </Title>

        </Container>
    );
}

export default FeedPage;