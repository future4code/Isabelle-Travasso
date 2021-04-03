import React from 'react';
import styled from 'styled-components';
import AddTrack from './AddTrack';

const Titulo = styled.h3`
    width: 100%;
    font-size: 24px;
    color: #fafaf5;
    font-family: monospace;
    margin: 4%;
`
const MusicName = styled.p`
    width: 100%;
    font-size: 20px;
    color: #fafaf5;
    font-family: monospace;
    margin: 1%;
`

const ButtonDelete = styled.button`
    padding: 1%;
    width: 10%;
    margin: 1em 0;
    border-radius: 50%;
    border-color: solid #fafaf5;
    color: #fafaf5;
    background-color: black;
    cursor: pointer

`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`

const DivTwoButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

`
const Buttons = styled.button`
    padding: 3%;
    width: 30%;
    border-radius: 2rem;
    border-color: 3px solid #fafaf5;
    color: #fafaf5;
    background-color: black;
    cursor: pointer;
    font-size: 15px;
    margin-left: 8%;
    margin-bottom: 5%
`

const Iframe = styled.iframe`
    width: 100%; 
    height: 80px;
    border: none;
`

class ViewPlayList extends React.Component {

    state = {
        addTrackOpen: false,
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
                    page = {this.props.page}
                    onKeyDownTrack ={this.props.onKeyDownTrack}
                />
            )
        }

        return (
            <Container>

                {this.state.addTrackOpen ?
                    addTracks()
                    : (
                        < div >
                            
                            <Titulo>{this.props.playListName}</Titulo>
                            <DivTwoButton>
                            <Buttons onClick={this.onClickAdd} > Adicionar Música </Buttons>
                            <Buttons onClick={this.props.backPlaylists}>Voltar</Buttons>
                            </DivTwoButton>
                            
                            {this.props.tracks.map(list => {
                                return (
                                    <div key={list.id}>
                                        <MusicName>{list.artist} - {list.name}</MusicName>
                                        <Iframe src={list.url} /> 
                                        <ButtonDelete onClick={() => this.props.deleteTrack(list)} > X </ButtonDelete>             
                                    </div>
                                )
                            })}

                        </div>
                    )
                }
            </Container>
        )

    }

}
export default ViewPlayList