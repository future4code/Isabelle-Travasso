import connections from './connections'
import { User } from '../models/userTypes'

const usersTable = () => connections('User_Arq')

export const getAllUsers = async () => {
    const allUsers = await usersTable()
    return allUsers
}

export const createUser = async (newUser: User) => {
    try {
        const user = await usersTable()
            .insert(newUser)
        return user
    } catch (err) {
        throw new Error(err.message)
    }
}

export const verifyEmail = async (email: string) => {
    const [result] = await usersTable()
        .where("email", `${email}`)
    return result
}

export const getUserById = async (id: string): Promise<any> => {
    const [result] = await usersTable()
        .select("*")
        .where({ id });

    return result;
}

export const deleteUser = async (id: string): Promise<any> => {
    await usersTable()
        .delete()
        .where({ id });
}