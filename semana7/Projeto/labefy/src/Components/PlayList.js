import axios from 'axios';
import React from 'react';
import { baseUrl, axiosConfig } from '../parameters'
import ViewPlayList from   './ViewPlayList'
// import styled from 'styled-components';

class PlayList extends React.Component {

    state = {
        playLists: [],
        inputSearchPlayList: '',
        playListId: '',
    }

    componentDidMount = () => {
        this.getAllPlayLists()
    }

    getAllPlayLists = async () => {
        try {
            const res = await axios.get(baseUrl, axiosConfig)
            this.setState({ playLists: res.data.result.list,
            playListId: res.data.result.list.id })
        } catch (err) {
            alert("Não foi possivel carregar a Lista de PlayLists")
        }
    }
    

    deletePlayList = async (playList) => {
        window.confirm(`Você tem certeza que deseja excluir a playlist ${playList.name}?`)
        try {
            await axios.delete(`${baseUrl}/${playList.id}`, axiosConfig)
            this.getAllPlayLists()
            window.location.reload();
            alert("PlayList excluida com sucesso")
        } catch (err) {
            alert("Não foi possível excluir essa PlayList, tente novamente mais tarde")
        }
    }

    onchangeSearchPlayList = (e) => {
        this.setState({ inputSearchPlayList: e.target.value })
    }

    searchPlayList = async () => {
        try {
            const res = await axios.get(`${baseUrl}/search?name=${this.state.inputSearchPlayList}`, axiosConfig)
            this.setState({ playLists: res.data.result.playlist, inputSearchName: '' })
        } catch (err) {
            alert("PlayList não encontrada, verifique o nome digitado")
        }
    }

    resetSearch = () => {
        this.getAllPlayLists()
    }

    render() {

        return (
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
                        <p key={playList.id}>

                            <li onClick={<ViewPlayList />}> {playList.name}</li>
                            <button onClick={() => this.deletePlayList(playList) }>Deletar</button>
                        </p>
                    )
                }
                )}
            </div>
        )

    }

}

export default PlayList