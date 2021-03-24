import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const DeleteButton = styled.span`
color: red;
`

// const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
// const axiosConfig = {
//     headers: {
//         Authorization: "Isabelle-Travasso-TurmaCruz"
//     }
// }

class UsersList extends React.Component {
    state = {
        userList: []
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
                console.log(err.message)
            })
    }

    // getAllUsers = async () => {
    //     try {
    //         const res = await axios.get(baseUrl, axiosConfig)
    //         this.setState({ userList: res.data });

    //     } catch (err) {
    //         alert("Não foi possivel carregar a lista, tente novamente mais tarde")
    //         console.log(err.message)
    //     }
    // }

    deleteUser = (id) => {
        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
                {
                    headers: {
                        Authorization: "Isabelle-Travasso-TurmaCruz"
                    }
                }
            )
            .then(() => {
                this.getAllUsers()
                alert("Usuário deletado com sucesso!")

            })
            .catch((err) => {
                alert("Não foi possível deletar esse usuário, tente novamente")
            console.log(err.message)
            })
    }


    render() {
        const renderUser = this.state.userList.map((user) => {
            return (
                <p key={user.id}>
                    {user.name}
                    <DeleteButton onClick={() => this.deleteUser(user.id)}>
                        X
                    </DeleteButton>
                </p>
            )
        })

        return (

            <div>
                <button onClick={this.props.nextPage}>Voltar para página de Registro</button>
                <h3>Lista de Usuários</h3>
                { renderUser}
            </div >
        )
    }

}

export default UsersList