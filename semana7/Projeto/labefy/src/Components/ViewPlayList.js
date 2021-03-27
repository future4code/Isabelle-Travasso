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

   
    getplayListTracks = async () => {
        try {
            const res = await axios.get(`${baseUrl}/${this.props.playListId}/tracks`, axiosConfig)
            this.setState({ trackList: res.data.result.tracks })
            console.log(res.data.result.tracks)
        } catch (err) {
            alert("Não foi possivel abrir a lista de musica")
            console.log(err.message)
        }
    }
    

    deleteTrack = async (track) => {
        window.confirm(`Você tem certeza que deseja excluir a musica ${track.id}?`)
        try {
            await axios.delete(`${baseUrl}/${this.props.playListId}/tracks/${track.id}`, axiosConfig)
            this.getplayListTracks(this.props.playlistId)
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