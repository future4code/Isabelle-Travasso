import React from 'react'
import { Container } from '../../Styles/style'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import CardPosts from '../../Components/CardPosts'

function FeedPage() {
    useProtectedPage()

    return (
        <Container>
            <CardPosts />
        </Container>
    );
}

export default FeedPage;