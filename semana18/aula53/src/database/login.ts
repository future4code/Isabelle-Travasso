import connection from '../connection'
import { User } from '../types/user'
import { Address } from '../types/address'

const loginTable = () => connection('to_do_list_users')
const addressTable = () => connection('address_users')

export const createUser = async (newUser: User) => {
    const user = loginTable().insert(newUser)
    return user
}

export const addAddress = async (newAddress: Address) => {
    const address = addressTable().insert(newAddress)
    return address
}

export const verifyEmail = async (email: string) => {
    const result = await loginTable()
        .select("*")
        .where(`${email}`);

    return result[0];
}
