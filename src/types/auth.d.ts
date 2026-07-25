
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

interface IUser extends Omit<IRegister, "confirmPassword"> {
    id?: number;
    role?: string;
    tpsId?: number | null;
    electionId?: number | null;
}



 

export type {IRegister, IUser, ILogin}