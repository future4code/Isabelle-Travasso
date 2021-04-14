import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { imagePlanet } from '../../constants/image'
import { ImgCard, CardList,TitleText, Section, Avatar, Container, Title, StyledBadge, StyledBadgeRed, Text } from '../../styles/style'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import axios from 'axios';
import { baseUrl, axiosConfig } from '../../constants/api'
import Badge from '@material-ui/core/Badge';

function TripDetailsPage(props) {
    useProtectedPage()
    const history = useHistory()

    const pathParams = useParams()
    const tripId = pathParams.id

    const [trip, setTrip] = useState({})
    const [candidatesList, setCandidatesList] = useState([])

    useEffect(() => {
        getDetailTripList()
    }, [])

    const getDetailTripList = async () => {
        try {
            const res = await axios.get(`${baseUrl}/trip/${tripId}`, axiosConfig)
            setTrip(res.data.trip)
            console.log(pathParams)
            setCandidatesList(res.data.trip.candidates)
        } catch (err) {
            alert("Erro ao tentar carregar detalhes da viagem")
        }
    }

    const getCandidate = async (id, decision) => {
        const body = {
            approve: decision
        }

        try {
            const res = await axios.put(`${baseUrl}/trips/${tripId}/candidates/${id}/decide`, axiosConfig)
            console.log({ decision })
        } catch (err) {
            alert("Erro na aprovação do candidato")
        }
    }

    return (
        <Container>
            <Title>{trip.name}</Title>
            <Section>
                <CardList>
                    <ImgCard src={imagePlanet(trip.planet)} alt={trip.planet} />
                    <TitleText>{trip.name} - {trip.planet} </TitleText>
                    <Text>{trip.description}</Text>
                    <Text><strong>Duração: </strong> {trip.durationInDays} dias</Text>
                    <Text><strong>Data: </strong>{trip.date}</Text>
                </CardList>
            </Section>
            <Title>Candidatos Pendentes</Title>
            <Section>
                <StyledBadgeRed
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar> 👤 </Avatar>
                </StyledBadgeRed>
                <Text> nome </Text>
            </Section>
            <Title>Candidatos Aprovados</Title>
            <Section>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar> 👤 </Avatar>
                </StyledBadge>
                <p> nome </p>
            </Section>
        </Container >
    );
}

export default TripDetailsPage;
