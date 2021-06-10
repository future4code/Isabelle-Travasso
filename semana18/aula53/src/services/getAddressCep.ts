import axios from 'axios'
import { ApiError } from '../utils/ApiError'
import { UserAddress } from "../types/address";

export const getAddressCep = async (cep: string) => {
  try {

    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
    const {localidade, bairro, uf, logradouro} = res.data

    const address: UserAddress = {
      street: logradouro,
      neighborhood: bairro,
      city: localidade,
      state: uf
    }

    return address
  } catch (error) {
    throw ApiError.internal()
  }
}
