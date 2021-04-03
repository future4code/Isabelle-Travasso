import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { baseUrl, axiosConfig } from '../parameters';


const Input = styled.input`
    font-family: monospace;
    font-size: 20px;
    width: 100%;
    padding: 2% 2%;
    border-radius: 2rem;
    margin-bottom: 2%;
    border: 2px inset rgb(160, 160, 160);
    background-color: rgb(233, 233, 233);
`

const Container = styled.div`
    color: #fafaf5;
    font-family: monospace;
    display:flex;
    justify-content:center;
    flex-direction: column;
    margin: 12%
`

const Titulo = styled.h3`
    font-size: 24px;
`

const ButtonAdicionar = styled.button`
    padding: 3%;
    width: 30%;
    border-radius: 2rem;
    border-color: 3px solid #fafaf5;
    color: #fafaf5;
    background-color: black;
    cursor: pointer;
    font-size: 15px
`

const DivButton = styled.div`
    display:flex;
    justify-content:center;
`


class FormPlayList extends React.Component {
    state = {
        inputPlayListName: ""
    }

    handleIputNameChange = (e) => {
        this.setState({ inputPlayListName: e.target.value })
    }

    createPlayList = async () => {
        const body = {
            name: this.state.inputPlayListName,
        }
        try {
            await axios.post(baseUrl, body, axiosConfig)
            this.setState({ inputPlayListName: '' })
            alert("PlayList Criada com sucesso")
            window.location.reload();
        } catch (err) {
            alert("Acredito que essa PlayList já exista, tente outro nome")
        }
    }

    onKeyDown = (e) => {
        if (e.keyCode === 'Enter' || e.keyCode === 13) {
            this.createPlayList()
        }
    }

    render() {
        return (
            <Container>
                <Titulo> Adicione sua PlayList</Titulo>
                <Input
                    type="text"
                    placeholder={"Nova PlayList"}
                    value={this.state.inputPlayListName}
                    onChange={this.handleIputNameChange}
                    onKeyDown={this.onKeyDown}
                />
                <DivButton>
                    <ButtonAdicionar onClick={this.createPlayList}>Adicionar</ButtonAdicionar>
                </DivButton>
            </Container>
        )
    }
}

export default FormPlayList