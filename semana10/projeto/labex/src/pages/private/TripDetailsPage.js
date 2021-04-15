import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { imagePlanet } from '../../constants/image'
import { ContainerButton, Button, ContainerDetail, ImgCard, CardList, TitleText, Section, Avatar, Container, Title, StyledBadge, StyledBadgeRed, Text } from '../../styles/style'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import axios from 'axios';
import { baseUrl, axiosConfig } from '../../constants/api'

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

    const getCandidate = async (id, decision) => {
        const body = {
            approve: decision
        }

        try {
            const res = await axios.put(`${baseUrl}/trips/${tripId}/candidates/${id}/decide`, body, axiosConfig)
            if (res.data.trip.candidates.approve === true) {
                alert("Candidato aprovado com sucesso!")
            } else {
                alert("Candidato não foi aprovado!")
            }
        } catch (err) {
            alert("Erro na aprovação do candidato")
        }
    }

    return (
        <Container>
            <Title>{trip.name}</Title>
            <ContainerDetail>
                <CardList>
                    <ImgCard detail src={imagePlanet(trip.planet)} alt={trip.planet} />
                    <TitleText>{trip.name} - {trip.planet} </TitleText>
                    <Text>{trip.description}</Text>
                    <Text><strong>Duração: </strong> {trip.durationInDays} dias</Text>
                    <Text><strong>Data: </strong>{trip.date}</Text>
                </CardList>
            </ContainerDetail>
            <Title>Candidatos Pendentes</Title>
            <Section avatar>
                {candidatesList.length ? (
                    candidatesList.map((candidate) => {
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
                                    <Button onclik={() => getCandidate(candidate.id, true)}>✓</Button>
                                    <Button onclik={() => getCandidate(candidate.id, false)}>X</Button>
                                </Container>
                            </CardList>
                        )
                    })
                ) : (
                    <Avatar text> Não há candidatos pendentes </Avatar>
                )}
            </Section>
            <Title>Candidatos Aprovados</Title>

            <Section bottom>
                {trip.approved === true ? (
                    candidatesList.map((candidate) => {
                        return (
                            <CardList key={candidate.id}>
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
                                <Avatar text> {candidate.name} </Avatar>
                            </CardList>
                        )
                    })
                ) : (
                    <Avatar text> Não há candidatos aprovados </Avatar>
                )}
            </Section>
        </Container >
    );
}

export default TripDetailsPage;
