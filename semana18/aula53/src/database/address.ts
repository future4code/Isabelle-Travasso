import connection from '../connection'
import { Address } from '../types/address'

const addressTable = () => connection('address_users')

export const getAllAddress = async () => {
    const allAddress = await addressTable()
    return allAddress
}

export const addAddress = async (newAddress: Address) => {
    const address = addressTable().insert(newAddress)
    return address
}