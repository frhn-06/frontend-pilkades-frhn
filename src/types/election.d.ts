interface IElection {
    id?: number;
    name?: string;
    desa?: string;
    kecamatan?: string;
    kabupatenKota?: string;
    provinsi?: string;
    status?: string;
    description?: string;
    logo?: string;
    startAt?: string;
    endAt?: string;
    createdAt?: string;
    updatedAt?: string;
}

export type {IElection}