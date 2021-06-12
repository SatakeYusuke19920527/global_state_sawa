import axios from 'axios'

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const fechGetData = async () => {
  return await API.get('/users')
}