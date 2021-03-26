import axios from 'axios';
import React from 'react';
// import styled from 'styled-components';
import { baseUrl, axiosConfig } from '../parameters';

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

    render() {
        return (
            <div>
                <div>
                    <h3> Cadastrando PlayList</h3>
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder={"Digite o nome da sua PlayList"}
                        value={this.state.inputPlayListName}
                        onChange={this.handleIputNameChange}
                    />
                    <button onClick={this.createPlayList}>Enviar</button>
                </div>
            </div>
        )
    }
}

export default FormPlayList