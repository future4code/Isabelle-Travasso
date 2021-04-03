import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`

const Input = styled.input`
    font-family: monospace;
    font-size: 20px;
    width: 70%;
    padding: 2% 2%;
    border-radius: 2rem;
    margin-bottom: 2%;
    border: 2px inset rgb(160, 160, 160);
    background-color: rgb(233, 233, 233);
`

const Label = styled.label`
    font-family: monospace;
    font-size: 20px;
    color: #fafaf5;
    margin: 2% 20%;
    align-self: flex-start;
`

const Titulo = styled.h3`
    font-size: 24px;
    color: #fafaf5;
    font-family: monospace;
    margin: 4% 15%;
`

const ButtonAdicionar = styled.button`
    padding: 3%;
    width: 40%;
    border-radius: 2rem;
    border-color: 3px solid #fafaf5;
    color: #fafaf5;
    background-color: black;
    cursor: pointer;
    font-size: 15px;
    margin-left: 4%;
    margin-bottom: 5%
`
const DivTwoButton = styled.div`
    width: 70%;
    margin-right: 2%;
    display: flex;
    justify-content: space-between;

`

class AddTrack extends React.Component {

    render() {
        return (
            <Container fixed>
                <Titulo>Adicione mais músicas a sua playlist</Titulo>
                <Label>Nome</Label>
                <Input
                    type="text"
                    value={this.props.inputName}
                    placeholder="Nome da música"
                    onChange={this.props.onchangeInputName}
                    onKeyDown={this.props.onKeyDownTrack}
                />
                <Label>Cantor ou Banda</Label>
                <Input
                    type="text"
                    value={this.props.inputArtist}
                    placeholder="Nome do cantor ou banda"
                    onChange={this.props.onchangeInputArtist}
                    onKeyDown={this.props.onKeyDownTrack}
                />
                <Label>Música</Label>
                <Input
                    value={this.props.inputUrl}
                    placeholder="Link da música"
                    onChange={this.props.onchangeInputUrl}
                    onKeyDown={this.props.onKeyDownTrack}
                />

                <DivTwoButton>
                    <ButtonAdicionar onClick={this.props.enviarTrack}>Adicionar</ButtonAdicionar>

                    <ButtonAdicionar onClick={this.props.backTracks}>Voltar</ButtonAdicionar>
                </DivTwoButton>
            </Container>
        )
    }
}

export default AddTrack