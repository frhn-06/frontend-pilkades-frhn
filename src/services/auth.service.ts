import instance from "@/libs/axios";
import { ILogin, IRegister, IUserResetPassword, IVerifyOtp } from "@/types/auth";
import endpoint from "./endpoint";

const AuthService = {
    register: (payload: IRegister) => instance.post(`${endpoint.AUTH}/register`, payload),

    login: (payload: ILogin) => instance.post(`${endpoint.AUTH}/login`, payload),

    me: (token: string) => instance.get(`${endpoint.AUTH}/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),

    findMe: () => instance.get(`${endpoint.AUTH}/find-me`),

    forgetPassword: (payload: {identifier: string}) => instance.post(`${endpoint.AUTH}/forget-password`, payload),

    verifyOtp: (payload: IVerifyOtp) => instance.post(`${endpoint.AUTH}/verify-otp`, payload),

    resetPassword: (payload: IUserResetPassword) => instance.patch(`${endpoint.AUTH}/reset-password`, payload)
} 

export default AuthService;