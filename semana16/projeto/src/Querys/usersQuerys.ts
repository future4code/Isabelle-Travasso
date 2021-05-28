import { connection } from "../Connections/connection"
import { User } from '../types'

export const getAllUsers = async() : Promise<any> => {
  const result = await connection.raw(`
        SELECT id, nickname FROM Users
    `)
    return result[0][0]

}

export const createUser = async(userData: User) : Promise<void> => {
    await connection
    .insert({
        id: userData.id,
        name: userData.name,
        nickname: userData.nickname,
        email: userData.email
    })
    .into("Users")
}

export const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT id, nickname FROM Users WHERE id = '${id}'
  `)
    return result[0][0]
}

export const editUserById = async (userData: User): Promise<void> => {
    await connection("Users")
    .update({
        name: userData.name,
        nickname: userData.nickname,
        email: userData.email
    })
    .where("id", userData.id)
}

export const searchUser = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Users WHERE name LIKE '%${name}%'
    `)
    return result[0][0]
}
