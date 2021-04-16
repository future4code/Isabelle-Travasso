import React from 'react'
import TripCard from '../../Component/TripCard'
import { Title, Container } from '../../styles/style'
import { useProtectedPage } from '../../hooks/useProtectedPage'

function AdminHomePage() {
    useProtectedPage()

    return (
        <Container>
            <Title>Painel administrativo</Title>
            <Container>
                <TripCard />
            </Container>
        </Container>
    );
}

export default AdminHomePage;
