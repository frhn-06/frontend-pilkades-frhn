interface IMemeberCandidate {
    name?: string;
    position?: string;
    order?: number | string;
    img?: string | null;
}

interface ICandidate {
    nomor?: number | string;
    vision?: string;
    mission?: string;
    img?: string;
    members?: IMemeberCandidate[]
}

export type {ICandidate, IMemeberCandidate}