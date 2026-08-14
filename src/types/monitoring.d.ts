import { IMemeberCandidate } from "./candidate";

interface ITpsMonitong {
    name?: string;
    location?: string;
}

interface IProgressMonitoring {
    totalAllVoter?: number;
    totalVoterVote?: number;
    percentageVoterVote?: number;
}

interface IMemberCandidateMonitoring {
    name?: string;
    order?: number;
    id?: number;
}

interface ICandidateMonitoring {
    id?: number;
    img?: string;
    vote?: number;
    percentage?: number;
    members?: IMemeberCandidate[];
}

interface IProgressTps {
    id?: number;
    name?: string;
    totalVoters?: number;
    totalVote?: number;
    percentageVote?: number;
}

interface IMonitoringAdmin {
    progress: IProgressMonitoring;
    candidates: ICandidateMonitoring[];
    progressTps: IProgressTps[];
}

interface IMonitoringPetugas extends Omit<IMonitoringAdmin, "progressTps"> {
    tps?: ITpsMonitong;
}

export type {ITpsMonitong, IProgressMonitoring, ICandidateMonitoring, IMemberCandidateMonitoring, IMonitoringAdmin, IMonitoringPetugas}