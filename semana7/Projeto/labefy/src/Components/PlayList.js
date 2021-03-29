import axios from 'axios';
import React from 'react';
import { baseUrl, axiosConfig, baseUrlDeleteTrack, baseUrlTrack } from '../parameters'
import ViewPlayList from './ViewPlayList';
// import styled from 'styled-components';

class PlayList extends React.Component {

    state = {
        playLists: [],
        inputSearchPlayList: '',
        trackList: [],
        playListDetail: [],
        viewTrack: false,
        playListId: ''

    }


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

    getplayListTracks = async (playlist) => {
        this.setState({  viewTrack: true })
        try {
            const res = await axios.get(`${baseUrl}/${playlist.id}/tracks`, axiosConfig)
            this.setState({ trackList: res.data.result.tracks, playListDetail: this.state.playLists })
            console.log(res.data.result.tracks)
        } catch (err) {
            alert("Não foi possivel abrir a lista de musica")
        }
    }

    deleteTrack = async (playlist, track) => {
        const confirm = window.confirm(`Você tem certeza que deseja excluir a musica ${track.id}?`)
        if (confirm === true) {
            try {
                await axios.delete(baseUrlDeleteTrack(playlist.id, track), axiosConfig)
                window.location.reload();
                alert("Musica apagada com sucesso")
            } catch (err) {
                alert("Não foi possivel excluir essa musica, tente novamente mais tarde")
            }
        }
    }

    backPlayLists = () => {
        <PlayList />
    }

    render() {
        const tracks = () => {
            return (
                <ViewPlayList
                    playListName={this.state.playListDetail.name}
                    tracks={this.state.trackList}
                    backPlaylists={this.backPlaylists}
                    playlistId={this.state.playListDetail.id}
                    deleteTrack={this.deleteTrack} />
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