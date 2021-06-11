export type Address = {
    id: string,
    public_place: string,
    number: number,
    street: string,
    neighborhood: string,
    city: string,
    state: string,
    complement: string,
    user_id: string
}

export type UserAddress = {
    street: string,
    neighborhood: string,
    city: string,
    state: string
}