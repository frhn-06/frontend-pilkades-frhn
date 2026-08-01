interface IMemeberCandidate {
    name?: string;
    position?: string;
    order?: number | string;
    img?: string | null;
}

interface ICandidate {
    id?: number;
    nomor?: number | string;
    vision?: string;
    mission?: string;
    img?: string | null;
    oldImg?: string | null;
    members?: IMemeberCandidate[]
}

export type {ICandidate, IMemeberCandidate}