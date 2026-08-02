interface IElectionDashboard {
    id?: number;
    name?: string;
    logo?: string;
    status?: string;
};

interface IStatistics {
    totalAllVoter?: number;
    totalVoterPresent?: number;
    totalVoterAbsen?: number;
    totalVoterVote?: number;
    totalVoterNotVote?: number;
}

interface IPercentagesDashboard {
    presentPercentage?: number;
    votePercentage?: number;
}


interface IDashboardAdmin {
    election?: IElectionDashboard;
    statistics?: IStatistics;
    percentages: IPercentagesDashboard;
}

interface IDashboardPetugas extends Omit<IDashboardAdmin> {
    tps?: {
        id?: number;
        name?: string;
        alamat?: string;
    }
}

export type {IDashboardAdmin, IDashboardPetugas, IElectionDashboard, IStatistics, IPercentagesDashboard}