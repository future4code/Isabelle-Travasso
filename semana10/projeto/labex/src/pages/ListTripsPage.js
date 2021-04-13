import React, { useEffect, useState } from 'react'
import { Titulo, useStylesTheme, Container, ImgCard } from '../styles/style'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import axios from 'axios';
import { baseUrl } from '../constants/api'
import { imagePlanet } from '../constants/image'

function ListTripsPage() {
    const classes = useStylesTheme();

    const [tripList, setTripList] = useState([])

    useEffect(() => {
        getTripList()
    }, [])

    const getTripList = async () => {
        try {
            const res = await axios.get(`${baseUrl}/trips`)
            setTripList(res.data.trips)
            console.log(res.data)
        } catch (err) {
            alert('Não foi possível carregar a lista de viagens')
        }
    }

    return (
        <Container>
            <Titulo>Lista de Viagens</Titulo>

            <GridList cellHeight={280} cols={3} className={classes.gridList}>
                {tripList.map((trip) => (
                    <GridListTile key={trip.id} >
                        <ImgCard src={imagePlanet(trip.planet)} alt={trip.planet} />
                        <GridListTileBar
                            title={trip.name}
                            subtitle={
                                <div>
                                    <h4>{trip.name} - {trip.planet} </h4>
                                    <p>Descrição: {trip.description}</p>
                                    <p>Duração: {trip.durationInDays}</p>
                                    <p>Data: {trip.date}</p>
                                </div>

                            }
                        />
                    </GridListTile>
                 ))}
            </GridList>

        </Container>
    );
}

export default ListTripsPage;
