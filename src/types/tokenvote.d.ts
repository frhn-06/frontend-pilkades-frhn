interface ITokenVote {
    id?: number;
    token?: string;
    electionId?: number;
    tpsId?: number;
    voterId?: number;
    expiredAt?: string;

    election?: {
        name?: string;
    };
    tps?: {
        name?: string;
    };
    voter?: {
        name?: string;
    }
}

export type {ITokenVote}