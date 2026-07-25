interface ITps extends Record<string, unknown> {
    id?: number | string;
    name?: string;
    alamat?: string;
    electionId?: number;
    rt?: number | string;
    rw?: number | string;
}

export type {ITps}