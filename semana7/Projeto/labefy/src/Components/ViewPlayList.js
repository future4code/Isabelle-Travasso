import React from 'react';
// import styled from 'styled-components';
import AddTrack from './AddTrack';
import { baseUrl, axiosConfig } from '../parameters'
import axios from 'axios';


class ViewPlayList extends React.Component {

    state = {
        addTrackOpen: false,
    }

    deleteTrack = async (track) => {
        const confirm = window.confirm(`Você tem certeza que deseja excluir a musica ${track.name}?`)
        if (confirm === true) {
            try {
                await axios.delete(`${baseUrl}/${this.porps.playlistId}/tracks/${track.id}`, axiosConfig)
                window.location.reload();
                alert("Musica apagada com sucesso")
            } catch (err) {
                console.log(this.porps.playlistId)
                alert("Não foi possivel excluir essa musica, tente novamente mais tarde")
            }
        }
    }

    onClickAdd = () => {
        this.setState({ addTrackOpen: true })
    }

    backTracks = () => {
        this.setState({ addTrackOpen: false })
    }

    getplayListTracks = () => {
        this.props.getplayListTracks()
    }


    render() {
        const addTracks = () => {
            return (
                <AddTrack
                    backTracks={this.backTracks}
                    onchangeInputName={this.props.onchangeInputName}
                    onchangeInputUrl={this.props.onchangeInputUrl}
                    onchangeInputArtist={this.props.onchangeInputArtist}
                    enviarTrack={this.props.enviarTrack}
                    inputName={this.props.inputName}
                    inputUrl={this.props.inputUrl}
                    inputArtist={this.props.inputArtis}
                />
            )
        }
        return (
            <div>

                {this.state.addTrackOpen ?
                    addTracks()
                    : (
                        < div >
                            <button onClick={this.props.backPlaylists}>Voltar</button>
                            <h3>{this.props.playListName}</h3>
                            <button onClick={this.onClickAdd} > + </button>

                            {this.props.tracks.map(list => {
                                return (
                                    <div key={list.id}>
                                        <p>{list.artist} - {list.name}</p>
                                        <iframe src={list.url} /> 
                                        <button onClick={() => this.deleteTrack(list)} > X </button>             
                                    </div>
                                )
                            })}

                        </div>
                    )
                }
            </div>
        )

    }

}
export default ViewPlayList