import { User } from '../../business/entities/User'

export type AuthenticationData = {
    id: string
}

export type UserData = {
    id: string,
    name: string,
    email: string,
    password: string
}

export interface SignupInputDTO {
    name: string,
    email: string,
    password: string
}

export interface LoginInputDTO {
    email: string,
    password: string
}

export const toUserModel = (obj: any) => {
    return obj && new User(
        obj.id,
        obj.email,
        obj.name,
        obj.password
    )
}