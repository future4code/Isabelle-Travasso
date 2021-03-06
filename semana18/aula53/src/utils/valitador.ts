import { User, USER_ROLES } from '../types/user'
import { verifyEmail } from '../database/login'
import { ApiError } from './ApiError'
import { LoginInput } from '../types/login'
import { Address } from '../types/address'

export const userValidator = (newUser: Omit<User, 'id'>) => {

    const { name, nickname, email, role, password } = newUser

    const userRegistered = verifyEmail(email)

    if (userRegistered) {
        throw ApiError.wrongParams("Email já cadastrado")
    }

    if (!name || !nickname) {
        throw ApiError.wrongParams("Preencha os campos 'name','nickname', 'role'")
    }

    if (!email || email.indexOf("@") === -1) {
        throw ApiError.wrongParams("Invalid email");
    }

    if (!password || password.length < 6) {
        throw ApiError.wrongParams("Invalid password");
    }

    if (!(role in USER_ROLES)) {
        throw ApiError.wrongParams("'role' deve ser 'NORMAL' ou 'ADMIN'")
    }

    return newUser
}

export const addressValidator = (newAddress: Omit<Address, 'id'>) => {

    const { public_place, number, street, neighborhood, city, state, complement, user_id } = newAddress

    if (!public_place || !number || !street || !neighborhood || !city || !state || !user_id){
        throw ApiError.wrongParams("Atenção! Apenas o campo complemento não é obrigatório")
    }

    return newAddress
}

export const loginValidator = (data: LoginInput) => {
    const { email, password } = data

    if (!email) {
        throw ApiError.wrongParams("Preencha o campo 'email'")
    }

    if (!email || email.indexOf("@") === -1) {
        throw ApiError.wrongParams("Email inválido");
    }

    if (!password) {
        throw ApiError.wrongParams("Preencha o campo 'senha'");
    }

    return data
}
