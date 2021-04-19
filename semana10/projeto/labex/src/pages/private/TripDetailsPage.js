import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { imagePlanet } from '../../constants/image'
import { Button, ContainerDetail, ImgCard, CardList, TitleText, Section, Avatar, Container, Title, StyledBadge, StyledBadgeRed, Text } from '../../styles/style'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import axios from 'axios';
import { baseUrl, axiosConfig } from '../../constants/api'
import CircularProgress from '@material-ui/core/CircularProgress'

function TripDetailsPage() {
    useProtectedPage()
    const pathParams = useParams()
    const tripId = pathParams.id

    const [trip, setTrip] = useState({})
    const [candidatesList, setCandidatesList] = useState([])

    useEffect(() => {
        getDetailTripList()
    }, [candidatesList])

    const getDetailTripList = async () => {
        try {
            const res = await axios.get(`${baseUrl}/trip/${tripId}`, axiosConfig)
            setTrip(res.data.trip)
            setCandidatesList(res.data.trip.candidates)
        } catch (err) {
            alert("Erro ao tentar carregar detalhes da viagem")
        }
    }

    const putCandidate = async (id, decision) => {
        const body = {
            approve: decision,
        }

        try {
            await axios.put(`${baseUrl}/trips/${tripId}/candidates/${id}/decide`, body, axiosConfig)
            if (decision === true) {
                alert("Candidato aprovado com sucesso!")
                console.log("foooi aqui")
                getDetailTripList()
            } else { alert("Candidato reprovado!") }
        } catch (err) {
            alert("Erro na aprovação do candidato")
        }
    }

    return (
        <Container>
            <Title>{trip.name}</Title>
            {trip.name ? (
                <ContainerDetail>
                    <CardList>
                        <ImgCard detail src={imagePlanet(trip.planet)} alt={trip.planet} />
                        <TitleText>{trip.name} - {trip.planet} </TitleText>
                        <Text>{trip.description}</Text>
                        <Text><strong>Duração: </strong> {trip.durationInDays} dias</Text>
                        <Text><strong>Data: </strong>{trip.date}</Text>
                    </CardList>
                </ContainerDetail>
            ) : (
                <Container progress>
                    <CircularProgress />
                </Container>
            )}
            <Title>Candidatos Pendentes</Title>
            <Section avatar>
                {candidatesList.length ? (
                    trip.candidates.map((candidate) => {
                        return (
                            <CardList avatar key={candidate.id}>
                                <StyledBadgeRed
                                    overlap="circle"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar>👤</Avatar>
                                </StyledBadgeRed>
                                <Avatar name><strong>{candidate.name} </strong>- {candidate.age}</Avatar>
                                <Avatar text> <strong>País: </strong> {candidate.country} </Avatar>
                                <Avatar text> <strong>Profissão: </strong> {candidate.profession} </Avatar>
                                <Avatar text> {candidate.applicationText} </Avatar>
                                <Container button>
                                    <Button onClick={() => putCandidate(candidate.id, true)}>✓</Button>
                                    <Button onClick={() => putCandidate(candidate.id, false)}>X</Button>
                                </Container>
                            </CardList>
                        )
                    })
                ) : (
                    <Avatar textNoCandidate> Não há candidatos pendentes </Avatar>
                )}
            </Section>
            <Title>Candidatos Aprovados</Title>

            <Section bottom>
                {trip.approved && trip.approved.length > 0 ? (
                    trip.candidates && trip.approved.map((candidate) => {
                        return (
                            <CardList textAproved key={candidate.id}>
                                <StyledBadge
                                    overlap="circle"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar>👤</Avatar>
                                </StyledBadge>
                                <Avatar text > {candidate.name} </Avatar>
                            </CardList>
                        )
                    })
                ) : (
                    <Avatar textNoCandidate> Não há candidatos aprovados </Avatar>
                )}
            </Section>
        </Container >
    );
}

export default TripDetailsPage;
