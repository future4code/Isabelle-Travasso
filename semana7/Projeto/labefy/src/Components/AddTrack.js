import axios from 'axios';
import React from 'react';
// import styled from 'styled-components';
import { baseUrl, axiosConfig } from '../parameters';


class AddTrack extends React.Component {
    state = {
        inputName: '',
        inputArtist: '',
        inputUrl: '',
    }

    addTrack = async (track) => {

        const body = {
            name: this.state.inputName,
            artist: this.state.inputArtist,
            url: this.state.inputUrl
        }

        try {
            await axios.post(`${baseUrl}/${track.id}/tracks`, body, axiosConfig)
            this.setState({ inputArtist: '', inputName: '', inputUrl: '' })
            alert("Musica adicionada com sucesso")
            window.location.reload();
        } catch (err) {
            alert("Não foi possivel adicionar esta músia a playList")
        }
    }



    onchangeInputName = (e) => {
        this.setState({ inputName: e.target.value })
    }

    onchangeInputUrl = (e) => {
        this.setState({ inputUrl: e.target.value })
    }

    onchangeInputArtist = (e) => {
        this.setState({ inputArtist: e.target.value })
    }


    render() {
        return (
            <div>
                <h4>Adicione mais músicas a sua playlist</h4>
                <label>Nome</label>
                <input
                    type="text"
                    value={this.state.inputName}
                    placeholder="Nome da Múica"
                    onChange={this.state.onchangeInputName}
                />
                <label>Cantor ou Banda</label>
                <input
                    type="text"
                    value={this.state.inputArtist}
                    placeholder="Nome do cantor ou banda"
                    onChange={this.state.onchangeInputArtist}
                />
                <label>Música</label>
                <input
                    type="text"
                    value={this.state.inputUrl}
                    placeholder="Link da musica"
                    onChange={this.state.onchangeInputUrl}
                />
                <section>
                    <button onClick={this.addTrack}>Adicionar</button>
                </section>

                <button onClick={this.props.backTracks}>Voltar</button>
            </div>
        )
    }
}

export default AddTrack