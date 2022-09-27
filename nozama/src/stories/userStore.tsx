import create from 'zustand';
import { login, getUser } from '../services/auth';
import { UserLogin } from '../models/user'

type UserLoginState = {
    UserLogin: UserLogin,
    token: string,
    handleLogin: ({ email, password }: UserLogin) => void,
    getUserLoginInfo: () => void
}

const UseUserLoginStore = create<UserLoginState>(set => ({
    UserLogin: {} as UserLogin,
    token: '',
    handleLogin: async ({ email, password }: UserLogin) => {
        const data = await login({ email, password })
        console.log(data)
        set({ token: data })
    },
    getUserLoginInfo: async () => {
        const data = await getUser()
        set({ UserLogin: data })
    }
}));

export default UseUserLoginStore