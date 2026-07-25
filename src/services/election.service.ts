import instance from "@/libs/axios";
import { IElection, IStatusElection } from "@/types/election";
import endpoint from "./endpoint";

const ElectionService = {
    create: (payload: IElection) => instance.post(`${endpoint.ELECTION}`, payload),

    findOne: () => instance.get(`${endpoint.ELECTION}`),
    
    update: (payload: IElection) => instance.patch(`${endpoint.ELECTION}`, payload),

    delete: () => instance.delete(`${endpoint.ELECTION}`),

    status: (payload: IStatusElection) => instance.patch(`${endpoint.ELECTION}/status`, payload)
}

export default ElectionService;