// import UsersDetails from './UsersDetails';
// import axios from 'axios';
// import React from 'react';
// import { baseUrl, axiosConfig } from '../parameters'

// export default class DetailAndEditPage extends React.Component {

//     state = {
//         openDetails: false,
//         inputName: '',
//         inputEmail: '',
//         userList: [],
//     }

//     userDetails = async (user) => {
//         this.setState({ openDetails: true })
//         try {
//             const res = await axios.get(`${baseUrl}/${user.id}`, axiosConfig)
//             this.setState({
//                 userListDetails: res.data,
//                 inputName: res.name,
//                 inputEmail: res.email
//             })
//         } catch (err) {
//             alert("Não foi possivel abrir os detalhes deste usuário")
//             console.log(err.message)
//         }
//     }

//     editUser = (edit) => {
//         const body = {
//             name: this.state.inputName,
//             email: this.state.inputEmail
//         }
//         axios
//             .put(`${baseUrl}/${edit.id}`, body, axiosConfig)
//             .then(() => {
//                 if (
//                     window.confirm(`Você realmente deseja editar o usuário ${edit.name}?`)
//                 ) {
//                     this.getAllUsers()
//                     this.setState({
//                         inputName: '',
//                         inputEmail: '',
//                         inputSearchName: '',
//                         openDetails: false
//                     })
//                     alert("Usuário editado com sucesso!")
//                 }
//             })
//             .catch((err) => {
//                 console.log(err.message)
//                 alert("Não foi possivel editar este usuário")
//             })

//     }

//     onChangeName = (e) => {
//         this.setState({
//             inputName: e.target.value
//         })
//     }

//     onChangeEmail = (e) => {
//         this.setState({
//             inputEmail: e.target.value
//         })
//     }

//     onClickDetails = () => {
//         this.setState({openDetails: !this.state.openDetails})
//     }

//     closeDetails = () => {
//         this.setState({
//             openDetails: false,
//             inputName: '',
//             inputEmail: ''
//         })
//     }

//     {this.props.openDetails && (
//     <UsersDetails
//     userListDetails={this.state.userListDetails}
//         editUser={this.editUser}
//         deleteConfirm={this.deleteConfirm}
//         closeDetails={this.closeDetails}
//         onChangeName={this.onChangeName}
//         onChangeEmail={this.onChangeEmail}
//         inputName={this.state.inputName}
//         inputEmail={this.state.inputEmail}
//     />
// )}
// }