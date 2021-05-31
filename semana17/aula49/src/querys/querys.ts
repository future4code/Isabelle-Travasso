import { connection } from '../connection'

export const selectAllUsers = async (): Promise<any> => {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)

    return result[0]
}

//Exercicio 1a-)

export const searchByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
       SELECT * 
       FROM aula48_exercicio
       WHERE name LIKE "%${name}%"
    `)
    return result[0]
}

//Exercicio 1b-)

export const searchByType = async (type: string): Promise<any> => {
    const result = await connection.raw(`
       SELECT * 
       FROM aula48_exercicio
       WHERE type LIKE "%${type}%"
    `)
    return result[0]
}

//Exercicio 2-)

export const orderByTypeOrName = async (orderWhat: string, orderHow: string): Promise<any> => {
    const result = await connection.raw(`
       SELECT * 
       FROM aula48_exercicio
       ORDER BY ${orderWhat} ${orderHow}
    `)
    return result[0]
}

//Exercicio 3-)

export const paginationWithFiveUsers = async (page: number): Promise<any> => {  
    const result = await connection.raw(`
       SELECT * 
       FROM aula48_exercicio
       LIMIT 5
       OFFSET ${5 * (page - 1)}
    `)
    return result[0]
}

//Exercicio 4-)

export const selectUsers = async (
    page: string,
    search?: string, 
    orderWhat?: string,
    orderHow?: string
    ): Promise<any> => {  

    const pageNumber: number = Number(page)
    const result = await connection.raw(`
       SELECT * 
       FROM aula48_exercicio
       ${search}
       ORDER BY ${orderWhat} ${orderHow}
       LIMIT 5
       OFFSET ${5 * (pageNumber - 1)}
    `)
    return result[0]
}