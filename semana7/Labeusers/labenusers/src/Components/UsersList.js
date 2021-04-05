import axios from 'axios';
import React from 'react';
import detail from '../img/employee.png'
import { baseUrl, axiosConfig } from '../parameters'
import styled from 'styled-components';
import UsersDetails from './UsersDetails';

const DeleteButton = styled.span`
color: red;
`

const Image = styled.img`
width: 40px
`

class UsersList extends React.Component {
    state = {
        userList: [],
        userListDetails: [],
        openDetails: false,
        inputName: '',
        inputEmail: '',
        inputSearchName:'',
    }

    componentDidMount = () => {
        this.getAllUsers()
    }

    //----------------------------------- DADOS ANTIGOS---------------------------------------
    /* getAllUsers = () => {
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
    } */



    // deleteUser = (id) => {
    //     axios
    //         .delete(`${baseUrl}/${id}`, axiosConfig)
    //         .then(() => {
    //             this.getAllUsers()
    //             alert("Usuário deletado com sucesso!")

    //         })
    //         .catch((err) => {
    //             alert("Não foi possível deletar esse usuário, tente novamente")
    //         console.log(err.message)
    //         })
    // }


    // --------------------------------------------------------------------------------

    getAllUsers = async () => {
        try {
            const res = await axios.get(baseUrl, axiosConfig)
            this.setState({ userList: res.data });

        } catch (err) {
            alert("Não foi possivel carregar a lista, tente novamente mais tarde")
            console.log(err)
        }
    }

    deleteConfirm = (user) => {
         window.confirm(`Você realmente deseja deletar o usuário ${user.name}?`) &&
            axios
                .delete(`${baseUrl}/${user.id}`, axiosConfig)
                .then(() => {
                    this.getAllUsers()
                    this.setState({openDetails: false})
                    alert("Usuário deletado com sucesso!")

                })
                .catch((err) => {
                    alert("Não foi possível deletar esse usuário, tente novamente")
                    console.log(err.message)
                })
    }

    userDetails = async (user) => {
        this.setState({ openDetails: true })
        try {
            const res = await axios.get(`${baseUrl}/${user.id}`, axiosConfig)
            this.setState({
                userListDetails: res.data,
                inputName: res.name,
                inputEmail: res.email
            })
        } catch (err) {
            alert("Não foi possivel abrir os detalhes deste usuário")
            console.log(err.message)
        }
    }

    editUser = (edit) => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }
        axios
            .put(`${baseUrl}/${edit.id}`, body, axiosConfig)
            .then(() => {
                if (
                    window.confirm(`Você realmente deseja editar o usuário ${edit.name}?`)
                ) {
                    this.getAllUsers()
                    this.setState({
                        inputName: '',
                        inputEmail: '',
                        inputSearchName: '',
                        openDetails: false
                    })
                    alert("Usuário editado com sucesso!")
                }
            })
            .catch((err) => {
                console.log(err.message)
                alert("Não foi possivel editar este usuário")
            })

    }

    onchangeSearchName = (e) => {
        this.setState({
            inputSearchName: e.target.value
        })
    }

    searchName = async () => {
        try {
            const res = await axios
                .get(`${baseUrl}/search?name=${this.state.inputSearchName}`, axiosConfig)
            this.setState({ userList: res.data, inputSearchName: '' })
        } catch (err) {
            alert("Este usuário não foi encontrado")
            console.log(err.message)
        }
    }

    resetSearch = () => {
        this.getAllUsers()
    }

    onChangeName = (e) => {
        this.setState({
            inputName: e.target.value
        })
    }

    onChangeEmail = (e) => {
        this.setState({
            inputEmail: e.target.value
        })
    }

    closeDetails = () => {
        this.setState({
            openDetails: false,
            inputName: '',
            inputEmail: ''
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.props.nextPage}>Voltar para página de Registro</button>
                <br />
                <br />
                <input
                    type="text"
                    value={this.state.inputSearchName}
                    placeholder="Busca por nome"
                    onChange={this.onchangeSearchName}
                />
                <section>
                    <button onClick={this.searchName}>Buscar</button>
                    <button onClick={this.resetSearch}>Limpar busca</button>
                </section>

                
                {this.state.openDetails && (
                    <UsersDetails
                    userListDetails={this.state.userListDetails}
                        editUser={this.editUser}
                        deleteConfirm={this.deleteConfirm}
                        closeDetails={this.closeDetails}
                        onChangeName={this.onChangeName}
                        onChangeEmail={this.onChangeEmail}
                        inputName={this.state.inputName}
                        inputEmail={this.state.inputEmail}
                    />
                )}

                <h3>Lista de Usuários</h3>
                {this.state.userList.map((user) => {

                    return (
                        <p key={user.id}>
                            <Image
                                onClick={() => this.userDetails(user)}
                                src={detail}
                                alt="Detalhes do usuário"
                            />
                            {user.name}
                            <DeleteButton onClick={() => this.deleteConfirm(user)}>
                                X
                            </DeleteButton>
                        </p>

                    )
                })}

            </div >
        )
    }
}
export default UsersList