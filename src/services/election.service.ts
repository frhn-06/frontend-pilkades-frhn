import instance from "@/libs/axios";
import { IElection } from "@/types/election";
import endpoint from "./endpoint";

const electionService = {
    create: (payload: IElection) => instance.post(`${endpoint.ELECTION}`, payload),

    findOne: () => instance.get(`${endpoint.ELECTION}`),
    
    update: (id: string, payload: IElection) => instance.patch(`${endpoint.ELECTION}/${id}/update`, payload),

    delete: (id: string) => instance.delete(`${endpoint.ELECTION}/${id}/delete`)
}

export default electionService;