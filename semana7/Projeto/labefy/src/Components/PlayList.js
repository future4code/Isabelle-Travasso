import axios from 'axios';
import React from 'react';
import { baseUrl, axiosConfig } from '../parameters'
import ViewPlayList from './ViewPlayList';
// import styled from 'styled-components';

class PlayList extends React.Component {

    state = {
        playLists: [],
        inputSearchPlayList: '',
        trackList: [],
        viewTrack: false,
        playlistId: '',
        playlistName: '',
        inputName: '',
        inputArtist: '',
        inputUrl: '',

    }

    // ----------------------- Playlist --------------------------------------

    componentDidMount = () => {
        this.getAllPlayLists()
    }

    getAllPlayLists = async () => {
        try {
            const res = await axios.get(baseUrl, axiosConfig)
            this.setState({ playLists: res.data.result.list })

        } catch (err) {
            alert("Não foi possivel carregar a Lista de PlayLists")
        }
    }


    deletePlayList = async (playList) => {

        const confirm = window.confirm(`Você tem certeza que deseja excluir a playlist ${playList.name}?`)
        if (confirm === true) {
            try {
                await axios.delete(`${baseUrl}/${playList.id}`, axiosConfig)
                this.getAllPlayLists()
                window.location.reload();
                alert("PlayList excluida com sucesso")
            } catch (err) {
                alert("Não foi possível excluir essa PlayList, tente novamente mais tarde")

            }
        }
    }

    onchangeSearchPlayList = (e) => {
        this.setState({ inputSearchPlayList: e.target.value })
    }

    searchPlayList = async () => {
        try {
            const res = await axios.get(`${baseUrl}/${this.state.inputSearchPlayList}`, axiosConfig)
            this.props.setState({ playLists: res.data.result.playlist, inputSearchName: '' })
        } catch (err) {
            alert("PlayList não encontrada, verifique o nome digitado")
        }
    }

    resetSearch = () => {
        this.getAllPlayLists()
    }
    // ----------------------------- Tracks -------------------------------------------------

    getplayListTracks = async (playlist) => {
        this.setState({ viewTrack: true })
        try {
            const res = await axios.get(`${baseUrl}/${playlist.id}/tracks`, axiosConfig)
            this.setState({ trackList: res.data.result.tracks, playlistId: playlist.id, playlistName: playlist.name })
        } catch (err) {
            alert("Não foi possivel abrir a lista de musica")
        }
    }

    
    addTrack = async () => {

        const body = {
            name: this.state.inputName,
            artist: this.state.inputArtist,
            url: this.state.inputUrl
        }

        try {
            await axios.post(`${baseUrl}/${this.state.playlistId}/tracks`, body, axiosConfig)
            this.setState({ inputArtist: '', inputName: '', inputUrl: '' })
            alert("Musica adicionada com sucesso")
            window.location.reload();
        } catch (err) {
            alert("Não foi possivel adicionar esta música a playList")
        }
    }

    onchangeInputName = (e) => {
        this.setState({ inputName: e.target.value })
    }

    onchangeInputUrl = (e) => {
        console.log(e)
        this.setState({ inputUrl: e.target.value })
    }

    onchangeInputArtist = (e) => {
        this.setState({ inputArtist: e.target.value })
    }


    backPlayLists = () => {
        this.setState({ viewTrack: false })
    }

    

    render() {
        
        const tracks = () => {
            return (
                <ViewPlayList
                    playListName={this.state.playlistName}
                    playlistId={this.state.playlistId}
                    tracks={this.state.trackList}
                    backPlaylists={!this.backPlaylists}
                    deleteTrack = {this.deleteTrack}
                    enviarTrack={this.addTrack}
                    inputName={this.state.inputName}
                    inputUrl={this.state.inputUrl}
                    inputArtist={this.state.inputArtis}
                    onchangeInputName={this.onchangeInputName}
                    onchangeInputUrl={this.onchangeInputUrl}
                    onchangeInputArtist={this.onchangeInputArtist}
                />
            )

        }


        return (
            <div>
                {this.state.viewTrack ? (
                    tracks()
                ) : (
                    <div>
                        <input
                            type="text"
                            value={this.state.inputSearchPlayList}
                            placeholder="Buscar Playlist"
                            onChange={this.onchangeSearchPlayList}
                        />
                        <section>
                            <button onClick={this.searchPlayList}>Buscar</button>
                            <button onClick={this.resetSearch}>Limpar busca</button>
                        </section>

                        <h3>PlayLists</h3>
                        {this.state.playLists.map((playList) => {
                            return (
                                <div key={playList.id}>
                                    <div onClick={() => this.getplayListTracks(playList)}>
                                        <li> {playList.name}</li>
                                    </div>
                                    <button onClick={() => this.deletePlayList(playList)}>Deletar</button>
                                </div>
                            )
                        }
                        )}
                    </div>
                )

                }



            </div>
        )

    }

}

export default PlayList