import { UserLogin, UserRegister } from "../../models/user";
import api from "../api";


export async function login({ email, password }: UserLogin) {
    try {
        const response = await api.post('/login', {
            email,
            password
        })
        console.log(response)
        return response.data;
    } catch (error) {
        alert("Email or password are wrong. Try again!")
        console.log(error)
    }
}

export async function register({ name, email, password, sendEmail }: UserRegister) {
    const response = await api.post('/users', {
        name,
        email,
        password,
        sendEmail
    })
    return response.data;
}

export async function getUser() {
    const response = await api.post('/token')
    return response.data;
} 