
interface IRegister {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

interface ILogin {
    identifier: string;
    password: string;
}


interface ITpsRelation {
    id?: number;
    name?: string;
    location?: string;
}
interface IUser extends Omit<IRegister, "confirmPassword"> {
    id?: number;
    role?: string;
    tpsId?: number | null;
    electionId?: number | null;
    tps? : ITpsRelation
}


interface IUserResetPassword {
    password: string;
    confirmPassword: string;
    resetToken: string;
}

interface IVerifyOtp {
    otp: string;
}
  

export type {IRegister, IUser, ILogin, IUserResetPassword, IVerifyOtp}