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

interface ILogoElection {
    logo: string | null
}

export type {IElection, IStatusElection, ILogoElection}