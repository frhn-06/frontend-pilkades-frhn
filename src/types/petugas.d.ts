
interface IPetugasForm {
    name?: string;
    email?: string;
    password?: string;
    tpsId?: number | string;
    
}

interface IPetugas extends IPetugasForm {
    id?: number;
    role?: string;
    tps?: {
        id?: number;
        name?: string;
        alamat?: string;
    }
    isActive?: boolean
}



 

export type {IPetugasForm, IPetugas}