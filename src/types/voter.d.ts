interface ITpsRelation {
    id?: string;
    name?: string;
    alamat?: string;
}

interface IVoter {
    id?: number;
    name?: string;
    info?: string | null;
    nik?: string | null;
    isPresent?: boolean;
    isVoted?: boolean;
    tpsId?: number;
    tps?: ITpsRelation
}

export type {IVoter}
