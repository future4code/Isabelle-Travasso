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
        name: "Usuário teste",
        cpf: "22357489076",
        birthDate: "25/11/1994",
        balance: 0,
        extract: []
    }
]