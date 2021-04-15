import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router';
import { imagePlanet } from '../constants/image'
import trash from '../img/trash.png'
import { useStyles, TextAdmin, AdminList, Container, ImgTrash, ImgCard, CardList, Text, TitleText, ContainerCard } from '../styles/style'
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress'
import axios from 'axios';
import { baseUrl, axiosConfig } from '../constants/api'
import { goToTripDetails } from '../Router/coordinator'

export function TripCard() {
    const history = useHistory()
    const classes = useStyles()
    const [tripList, setTripList] = useState([])

    useEffect(() => {
        getTripList()
    }, [tripList])

    const getTripList = async () => {
        try {
            const res = await axios.get(`${baseUrl}/trips`)
            setTripList(res.data.trips)
        } catch (err) {
            console.log(err)
            alert('Não foi possível carregar a lista de viagens')
        }
    }

    const getTripDetail = async (id) => {
        try {
            await axios.get(`${baseUrl}/trip/${id}`, axiosConfig)
            goToTripDetails(history, id)
        } catch (err) {
            alert('Ops! Não foi possivel acessar os detalhes dessa viagem')
        }
    }

    const deleteTrip = async (trip) => {
        const confirm = window.confirm(`Você tem certeza que deseja excluir a viagem ${trip.name}?`)
        if (confirm === true) {

            try {
                await axios.delete(`${baseUrl}/trips/${trip.id}`, axiosConfig)
                alert("Viagem deletada com sucesso!")
            } catch (err) {
                alert("Não foi possivel deletar essa viagem, tente novamente mais tarde")
            }

        }
    }

    return (
        <div>

            {history.location.pathname === '/trips/list' ? (
                <ContainerCard>
                    {tripList.length !== 0 ? (

                        tripList.map((trip) => {
                            return (
                                <CardList key={trip.id}>
                                    <ImgCard src={imagePlanet(trip.planet)} alt={trip.planet} />
                                    <TitleText>{trip.name} - {trip.planet} </TitleText>
                                    <Text>{trip.description}</Text>
                                    <Text><strong>Duração: </strong> {trip.duration} dias</Text>
                                    <Text><strong>Data: </strong>{trip.date}</Text>
                                </CardList>
                            )
                        })

                    ) : (
                        <Container progress>
                            <CircularProgress />
                        </Container>
                    )}
                </ContainerCard>
            ) : (
                tripList.length !== 0 ?
                    (
                        tripList.map((trip) => {
                            return (
                                <AdminList key={trip.id}>
                                    <Avatar className={classes.avatar} alt={trip.planet} src={imagePlanet(trip.planet)} onClick={() => { getTripDetail(trip.id) }} />
                                    <TextAdmin onClick={() => { getTripDetail(trip.id) }}>{trip.name} - {trip.planet} </TextAdmin>
                                    <ImgTrash src={trash} onClick={() => deleteTrip(trip)} ></ImgTrash>
                                </AdminList>
                            )
                        })

                    ) : (
                        <Container>
                            <CircularProgress />
                        </Container>
                    )
            )}

        </div>
    )

}

export default TripCard