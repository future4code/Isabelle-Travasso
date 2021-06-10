import { User, USER_ROLES } from '../types/user'
import { verifyEmail } from '../database/users'
import { ApiError } from './ApiError'
import { Login } from '../types/user'

export const userValidator = (newUser: Omit<User, 'id'>) => {

    const { name, email, password, role } = newUser

    if (!name || !role) {
        throw new Error("Preencha os campos 'name' e 'role'")
    }

    if (!email || email.indexOf("@") === -1) {
        throw new Error("Email inválido")
    }

    if (!password || password.length < 6) {
        throw new Error("A senha deve conter no mínimo 6 caracteres e no máximo 20")
    }

    if (!(role in USER_ROLES)) {
        throw new Error("'role' deve ser 'NORMAL' ou 'ADMIN'")
    }

    return newUser
}

export const loginValidator = (data: Login) => {
    const { email, password } = data

    if (!email) {
        throw new Error("Preencha o campo 'email'")
    }

    if (!email || email.indexOf("@") === -1) {
        throw new Error("Email inválido");
    }

    if (!password) {
        throw new Error("Preencha o campo 'senha'");
    }

    return data
}

export const editUserValidator = (editUser: Omit<User, "id">) => {

    const { name } = editUser

    if (!name){
        throw new Error("Atenção! Apenas o campo nome pode ser alterado")
    }

    return editUser
}
