import create from 'zustand';
import { login, getUser } from '../services/auth';
import { UserLogin } from '../models/user'
import { setCookie } from 'nookies'
type UserLoginState = {
    UserLogin: UserLogin,
    handleLogin: ({ email, password }: UserLogin) => void,
    getUserLoginInfo: () => void
}

const UseUserStore = create<UserLoginState>(set => ({
    UserLogin: {} as UserLogin,
    handleLogin: async ({ email, password }: UserLogin) => {
        const data = await login({ email, password })
        console.log(data)
        setCookie(undefined, 'nozama_token', data.token)
    },
    getUserLoginInfo: async () => {
        const data = await getUser()
        set({ UserLogin: data })
    }
}));

export default UseUserStore