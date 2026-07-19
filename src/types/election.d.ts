interface IElection {
    id?: number;
    name?: string;
    desa?: string;
    kecamatan?: string;
    kabupatenKota?: string;
    provinsi?: string;
    status?: string;
    description?: string;
    logo?: string | null;
    startAt?: string | Date;
    endAt?: string | Date;
    createdAt?: string;
    updatedAt?: string;
}

export type {IElection}