import axios from "axios";
import { parseCookies } from 'nookies'

const api = axios.create({
    baseURL: 'http://localhost:3200/'
})

const { "perola.token": token } = parseCookies();

if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default api;