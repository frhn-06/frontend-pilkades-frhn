
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
        location?: string;
    }
    isActive?: boolean;
    electionId?: number;
}



 

export type {IPetugasForm, IPetugas}