import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const DeleteButton = styled.span`
color: red;
`
class UsersList extends React.Component {
    state = {
        userList: [],
    }

    componentDidMount = () => {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                {
                    headers: {
                        Authorization: "Isabelle-Travasso-TurmaCruz"
                    }
                }
            )
            .then((res) => {
                this.setState({ userList: res.data })
            })
            .catch((err) => {
                alert("Não foi possivel carregar a lista, tente novamente mais tarde")
                console.log(err.response.data)
            })
    }

    deleteUser = (id) => {
        axios
            .delete(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id",
                {
                    headers: {
                        Authorization: "Isabelle-Travasso-TurmaCruz"
                    }
                }
            )
            .then((res) => {
                this.getUsers()
                alert("Usuário deletado com sucesso!")
            })
            .catch((err) => {
                alert("Não foi possível deletar esse usuário, tente novamente")
            })
    }


    render() {
        const usersListPage = this.state.userList.map((users) => {
            return (
                <li key={users.id}>
                    {users.name}
                    <DeleteButton onClick={() => this.deleteUser(users.id)}>
                        X
                    </DeleteButton>
                </li>
            )
        })

        return (
            <div>
                <h3>Lista de Usuários</h3>
                <button onClick={this.props.nextPage}>Voltar para página de Registro</button>
                {usersListPage}

            </div>
        )
    }

}

export default UsersList