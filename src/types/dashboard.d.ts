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

interface ITpsDashboard {
    id?: number;
    name?: string;
    location?: string;
}

interface IDashboardAdmin {
    election?: IElectionDashboard;
    statistics?: IStatistics;
    percentages: IPercentagesDashboard;
}

interface IDashboardPetugas extends IDashboardAdmin {
    tps?: ITpsDashboard;
}

export type {IDashboardAdmin, IDashboardPetugas, IElectionDashboard, IStatistics, IPercentagesDashboard, ITpsDashboard}