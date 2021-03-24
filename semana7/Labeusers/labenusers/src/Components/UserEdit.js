import React from 'react'

export const UserEdit = (props) => {
    return(
<div>
    <label>Nome: </label>
    <section>
    <input 
    type="text"
    placeholder="Digite o novo nome"
    value={props.inputName}
    onChange={props.onChangeName}
    />
    </section>
    <section>
    <input 
    type="email"
    placeholder="Digite o novo email"
    value={props.inputEmail}
    onChange={props.onChangeEmail}
    />
    </section>

    <button onClick={() => props.editUser(props.details)}>Editar</button>

</div>

    )
}

export default UserEdit