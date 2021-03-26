import axios from 'axios';
import React from 'react';
// import styled from 'styled-components';
import { baseUrl, axiosConfig } from '../parameters';
import AddTrack from './AddTrack';


class ViewPlayList extends React.Component {
    state = {
        trackList: [],
    }

    componentDidMount = () => {
        this.getplayListTracks()
    }

    getplayListTracks = async (playlistId) => {
        try {
            const res = await axios.get(`${baseUrl}/fbf83f7c-91da-47e9-a4b7-1376a607d0e0/tracks`, axiosConfig)
            this.setState({ trackList: res.data.result.tracks })
            console.log(res.data.result.tracks)
        } catch (err) {
            alert("Não foi possivel abrir a lista de musica")
            console.log(err.message)
        }
    }

    deleteTrack = async (playlistId, track) => {
        window.confirm(`Você tem certeza que deseja excluir a musica ${track.id}?`)
        try {
            await axios.delete(`${baseUrl}/${playlistId}/tracks/${track.id}`, axiosConfig)
            this.getplayListTracks()
            this.setState({ openAddTrack: false })
            window.location.reload();
            alert("Musica apagada com sucesso")
        } catch (err) {
            alert("Não foi possivel excluir essa musica, tente novamente mais tarde")
        }
    }


    render() {

        return (
            <div>
                <h3>Lista de Músicas</h3>
                <button onClick={<AddTrack />} > + </button>
                {/* {this.trackList.map((track) => {
                    return (
                        <p key={track.id}>
                            <p> {track.name}</p>
                            <p>{track.artist}</p>
                            <p>{track.url}</p>
                        </p>
                    )
                })
                } */}
                <p> {this.state.trackList.name}</p>
                <p>{this.state.trackList.artist}</p>
                <p>{this.state.trackList.url}</p>

                <button onClick={() => this.deleteTrack(this.props.playlistId, this.state.trackId)} > X </button>
            </div>
        )
    }

}
export default ViewPlayList