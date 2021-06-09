import axios from 'axios'
import { ApiError } from '../utils/ApiError'
import { UserAddress } from "../types/address";

export const getAddress = async (cep: string): Promise<UserAddress | null> => {
  try {

    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
    const {localidade, bairro, uf, logradouro} = res.data

    const address: UserAddress = {
      city: localidade,
      neighborhood: bairro,
      state: uf,
      street: logradouro
    }

    return address
  } catch (error) {
    throw ApiError.internal()
  }
}
