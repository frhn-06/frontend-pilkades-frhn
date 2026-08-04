import { IMemeberCandidate } from "./candidate";

interface ITpsMonitong {
    name?: string;
    alamat?: string;
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

interface IMonitoringAdmin {
    progress: IProgressMonitoring;
    candidates: ICandidateMonitoring[];
}

interface IMonitoringPetugas extends IMonitoringAdmin {
    tps?: ITpsMonitong;
}

export type {ITpsMonitong, IProgressMonitoring, ICandidateMonitoring, IMemberCandidateMonitoring, IMonitoringAdmin, IMonitoringPetugas}