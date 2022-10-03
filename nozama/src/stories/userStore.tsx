import create from 'zustand';
import { login, getUser } from '../services/auth';
import { UserLogin } from '../models/user';
import { setCookie } from 'nookies';
import api from '../services/api';

type UserLoginState = {
    UserLogin: any,
    handleLogin: ({ email, password }: UserLogin) => void,
    getUserLoginInfo: () => void
}

const UseUserStore = create<UserLoginState>(set => ({
    UserLogin: {},
    handleLogin: async ({ email, password }: UserLogin) => {
        const data = await login({ email, password })
        setCookie(undefined, 'nozama_token', data.token)
        api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
    },
    getUserLoginInfo: async () => {
        const data = await getUser()
        set({ UserLogin: data })
        console.log(data)
    }
}));

export default UseUserStore