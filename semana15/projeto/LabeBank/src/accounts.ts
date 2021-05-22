export type User = {
    name: string,
    cpf: string,
    birthDate: string | Date,
    balance: number,
    extract: historic[]
}

export type historic = {
    value: number,
    date: string | Date,
    description: string
}

export const users: User[] = [
    {
        name: "Patricia Peres",
        cpf: "22357489076",
        birthDate: "25/11/1994",
        balance: 2000,
        extract: []
    },
    {
        name: "Nadia Oh",
        cpf: "66796467890",
        birthDate: "10/03/2000",
        balance: 3000,
        extract: []
    }
]