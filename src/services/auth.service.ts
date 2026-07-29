import instance from "@/libs/axios";
import { ILogin, IRegister } from "@/types/auth";
import endpoint from "./endpoint";

const AuthService = {
    register: (payload: IRegister) => instance.post(`${endpoint.AUTH}/register`, payload),

    login: (payload: ILogin) => instance.post(`${endpoint.AUTH}/login`, payload),

    me: (token: string) => instance.get(`${endpoint.AUTH}/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),

    findMe: () => instance.get(`${endpoint.AUTH}/find-me`)
} 

export default AuthService;