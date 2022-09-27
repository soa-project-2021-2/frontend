
export type UserLogin = {
    email: string;
    password: string;
}

export type UserRegister = {
    name: string;
    email: string;
    password: string;
    sendEmail: boolean;
}