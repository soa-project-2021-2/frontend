import api from "../api";

export async function createOrder(data:any) {
    const response = await api.post('/api/order', data)
    return response.data
}

export async function getOrders() {
    const response = await api.get('/api/order')
    return response.data
}

export async function getUserOrder(userId: number) {
    const response = await api.get(`/api/order/user/${userId}`)
    return response.data
}
