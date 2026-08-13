import instance from "@/libs/axios";
import { IElection, ILogoElection, IStatusElection } from "@/types/election";
import endpoint from "./endpoint";

const ElectionService = {
    create: (payload: IElection) => instance.post(`${endpoint.ELECTION}`, payload),

    findOne: () => instance.get(`${endpoint.ELECTION}`),
    
    update: (payload: IElection) => instance.patch(`${endpoint.ELECTION}`, payload),

    delete: () => instance.delete(`${endpoint.ELECTION}`),

    status: (payload: IStatusElection) => instance.patch(`${endpoint.ELECTION}/status`, payload),

    updateLogo: (payload: ILogoElection) => instance.patch(`${endpoint.ELECTION}/update-logo`, payload)
}

export default ElectionService;