import axios from 'axios';
import React from 'react';
import { baseUrl, axiosConfig } from '../parameters'
import ViewPlayList from './ViewPlayList';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

const Input = styled.input`
    font-family: monospace;
    font-size: 20px;
    width: 50%;
    padding: 2% 2%;
    border-radius: 2rem;
    border: 2px inset rgb(160, 160, 160);
    margin-bottom: 2%;
    background-color: rgb(233, 233, 233);
`

const DivSearch = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
`
const DivOpenTrack = styled.div`
    width: 50%
`

const DivTwoButton = styled.div`
    width:50%;
    display:flex;
    justify-content: space-between;

`

const ButtonSearch = styled.button`
    padding: 3%;
    border-radius: 2rem;
    border-color: 3px solid #fafaf5;
    color: #fafaf5;
    background-color: black;
    cursor: pointer
`

const ButtonDelete = styled.button`
    padding: 1%;
    margin: 1em 0;
    border-radius: 50%;
    border-color: solid #fafaf5;
    color: #fafaf5;
    background-color: black;
    cursor: pointer

`
const DivList = styled.div`
    display:flex;
    justify-content: center
`

const ListPlaylist = styled.p`
    font-family: monospace;
    font-size: 20px;
    color: #fafaf5;
    cursor: pointer;
    margin-right: 3%;

    ${DivOpenTrack}:hover & {
        font-size: 22px;
    }

`

const Titulo = styled.h3`
    font-size: 24px;
    color: #fafaf5;
    font-family: monospace;
    margin: 4% 15%;
`


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

    onChangeSearchPlayList = (e) => {
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

    onKeyDown = (e) => {
        if (e.keyCode === 'Enter' || e.keyCode === 13) {
            this.searchPlayList()
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
            this.setState({ trackList: res.data.result.tracks, playlistId: playlist.id, playlistName: playlist.name, page: 'Track' })
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

    onKeyDownTrack = (e) => {
        if (e.keyCode === 'Enter' || e.keyCode === 13) {
            this.addTrack()
        }
    }

    deleteTrack = async (track) => {
        const confirm = window.confirm(`Você tem certeza que deseja excluir a musica ${track.name}?`)
        if (confirm === true) {
            try {
                await axios.delete(`${baseUrl}/${this.state.playlistId}/tracks/${track.id}`, axiosConfig)
                window.location.reload();
                alert("Musica apagada com sucesso")
            } catch (err) {
                alert("Não foi possivel excluir essa musica, tente novamente mais tarde")
            }
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

    backPlaylists = () => {
        this.setState({ viewTrack: false })
    }

    render() {
        const tracks = () => {
            return (
                <ViewPlayList
                    playListName={this.state.playlistName}
                    playlistId={this.state.playlistId}
                    tracks={this.state.trackList}
                    backPlaylists={this.backPlaylists}
                    deleteTrack={this.deleteTrack}
                    enviarTrack={this.addTrack}
                    inputName={this.state.inputName}
                    inputUrl={this.state.inputUrl}
                    inputArtist={this.state.inputArtis}
                    onchangeInputName={this.onchangeInputName}
                    onchangeInputUrl={this.onchangeInputUrl}
                    onchangeInputArtist={this.onchangeInputArtist}
                    page = {this.props.page}
                    onKeyDownTrack ={this.onKeyDownTrack}
                />
            )

        }


        return (
            <Container maxWidth='100wh'>
                {this.state.viewTrack ? (
                    tracks()
                ) : (
                    <Container>
                        <DivSearch>

                            <Input
                                onKeyDown={this.onKeyDown}
                                type="text"
                                value={this.state.inputSearchPlayList}
                                placeholder="🔍 Buscar Playlist"
                                onChange={this.onChangeSearchPlayList}
                            />

                            <DivTwoButton>
                                <ButtonSearch onClick={this.searchPlayList}>Buscar</ButtonSearch>
                                <ButtonSearch onClick={this.resetSearch}>Limpar busca</ButtonSearch>
                            </DivTwoButton>
                        </DivSearch>

                        <Titulo>PlayLists</Titulo>

                        {this.state.playLists.map((playList) => {
                            return (

                                <DivList key={playList.id}>
                                    <DivOpenTrack onClick={() => this.getplayListTracks(playList)}>
                                        <ListPlaylist> {playList.name}</ListPlaylist>
                                    </DivOpenTrack>
                                    <ButtonDelete onClick={() => this.deletePlayList(playList)}> X </ButtonDelete>
                                </DivList>
                            )
                        }
                        )}
                    </Container>
                )

                }



            </Container>
        )

    }

}

export default PlayList