import connection from '../connection'
import { User } from '../types/user'

const userTable = () => connection('to_do_list_users')

export const getAll = async () => {
    const allUsers = await userTable()
    return allUsers
}

export const getUserById = async (id: string): Promise<any> => {
    const result = await userTable()
        .select("*")
        .where({ id });

    return result[0];
}

export const deleteUser = async (id: string): Promise<any> => {
    await userTable()
        .delete()
        .where({ id });
}