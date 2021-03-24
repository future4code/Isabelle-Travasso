import React from 'react';
import UserEdit from './UserEdit';
import styled from 'styled-components';

const MenuEdit = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:70%
`

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
                    <MenuEdit>
                        <button onClick={this.onChangeEdit}>Editar</button>
                        <DeleteButton onClick={() => this.props.deleteConfirm(this.props.userListDetails)}>
                            X
                        </DeleteButton>
                    </MenuEdit>
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