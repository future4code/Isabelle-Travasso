import React from 'react'
import TripCard from '../../Component/TripCard';
import { Container, ContainerCard, Title } from '../../styles/style'

export function ListTripsPage(props) {

    return (
        <Container>

            <Title>Lista de Viagens</Title>
            <ContainerCard>
                
                <TripCard />

            </ContainerCard>
        </Container>
    );
}

export default ListTripsPage;
