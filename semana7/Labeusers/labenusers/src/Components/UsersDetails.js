import React from 'react';
import UserEdit from './UserEdit';
import styled from 'styled-components';

const DeleteButton = styled.span`
color: red;
`

class UsersDetails extends React.Component {
    state = {
        userListDetails: [],
        edit: false,
    }

    onChangeEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    render() {
        return (

            <div>

                <button onClick={this.props.nextPage}>Voltar para página de Registro</button>
                <h3>Detalhes do Usuário</h3>
                {this.state.edit ? (<UserEdit 
                userListDetails={this.props.userListDetails}
                editUser={this.props.editUser}
                onChangeName={this.props.onChangeName}
                onChangeEmail={this.props.onChangeEmail}
                inputName={this.props.inputName}
                inputEmail={this.props.inputEmail}
                
                />) : (
                    <div>
                        <p> Nome: {this.props.userListDetails.name}</p>
                        <p>E-mail: {this.props.userListDetails.email}</p>

                        <DeleteButton onClick={() => this.deleteConfirm(this.props.userListDetails)}>
                            X
                        </DeleteButton>
                    </div>

                    )}
                <button onClick={this.props.closeDetails}>
                Voltar
                </button>
            </div>
        )
    }

}

export default UsersDetails