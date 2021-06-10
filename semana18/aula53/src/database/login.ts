import connection from '../connection'
import { User } from '../types/user'

const loginTable = () => connection('to_do_list_users')

export const createUser = async (newUser: User) => {
    const user = loginTable().insert(newUser)
    return user
}

export const verifyEmail = async (email: string) => {
    const result = await loginTable()
        .select("*")
        .where(`${email}`);

    return result[0];
}
