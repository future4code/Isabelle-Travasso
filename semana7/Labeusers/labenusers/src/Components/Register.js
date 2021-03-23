import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2px;
`

class Register extends React.Component {
    state = {
        inputValueEmail: "",
        inputValueNome: ""
    }

    handleIputNomeChange = (e) => {
        this.setState({ inputValueNome: e.target.value })
    }

    handleIputEmailChange = (e) => {
        this.setState({ inputValueEmail: e.target.value })
    }
    createUser = () => {
        const body = {
            name: this.state.inputValueNome,
            email: this.state.inputValueEmail
        }
        axios
            .post(
                " https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users?=",
                body,
                {
                    headers: {
                        Authorization: "Isabelle-Travasso-TurmaCruz"
                    }
                }
            )
            .then((res) => {
                this.setState({ inputValueEmail: '', inputValueNome: '' })
                alert("Usuário criado com sucesso!")
            })
            .catch((err) => {
                alert("E-mail ou Nome inválido, tente novamente")
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.props.nextPage}>Ir para a Lista de Usuários</button>
                <Container>
                    <h3> Cadastro do Usuário</h3>
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder={"Digite seu nome"}
                        value={this.state.inputValueNome}
                        onChange={this.handleIputNomeChange}
                    />
                    <label>E-mail</label>
                    <input
                        type="email"
                        placeholder={"Digite seu e-mail"}
                        value={this.state.inputValueEmail}
                        onChange={this.handleIputEmailChange}
                    />
                    <button onClick={this.createUser}>Enviar</button>
                </Container>
            </div>
        )
    }
}

export default Register