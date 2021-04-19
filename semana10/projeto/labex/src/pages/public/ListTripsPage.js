import React from 'react'
import TripCard from '../../Component/TripCard';
import { Container, Title } from '../../styles/style'

export function ListTripsPage(props) {

    return (
        <Container>

            <Title>Lista de Viagens</Title>

            <TripCard />

        </Container>
    );
}

export default ListTripsPage;
