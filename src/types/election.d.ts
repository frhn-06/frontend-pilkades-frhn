interface IElection {
    id?: number;
    name?: string;
    organizerName?: string;
    organizerInfo?: string;
    status?: string;
    description?: string;
    logo?: string | null;
    startAt?: string | Date;
    endAt?: string | Date;
    createdAt?: string;
    updatedAt?: string;
}

interface IStatusElection {
    status: "DRAFT" | "UPCOMING" | "ONGOING" | "FINISHED"
}

export type {IElection, IStatusElection}