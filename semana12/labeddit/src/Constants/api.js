export const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit'

const token = window.localStorage.getItem('token')

export const axiosConfig = { headers: { Authorization: token } }