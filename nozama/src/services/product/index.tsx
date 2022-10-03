import api from "../api";


export async function products() {
    const response = await api.get('/product')
    return response.data
}