import { useState, useEffect } from "react"
import { baseUrl } from '../constants/api'
import axios from "axios"

export const useGetApi = (initialState) => {
  const [tripList, setTripList] = useState(initialState)

  const get = () => {
    axios.get(`${baseUrl}/trips`)
      .then((res) => setTripList(res.data.trips))
      .catch((err) => alert('Não foi possível carregar a lista de viagens'))
  }

  useEffect(() => {
    get()
  }, [tripList])

  return [tripList, get]
}

