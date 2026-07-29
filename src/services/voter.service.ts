import instance from "@/libs/axios";
import { IVoter } from "@/types/voter";
import endpoint from "./endpoint";

const VoterService = {
    create: (payload: IVoter) => instance.post(`${endpoint.VOTER}`, payload),

    findAll: (params: string) => instance.get(`/all-voter?${params}`),

    findAllPerTps: (params: string) => instance.get(`${endpoint.VOTER}?${params}`),

    findOne: (id: string) => instance.get(`${endpoint.VOTER}/${id}`),

    update: (id: string, payload: IVoter) => instance.patch(`${endpoint.VOTER}/${id}`, payload),

    present: (id: string) => instance.patch(`${endpoint.VOTER}/${id}/present`),

    voted: (id: string) => instance.patch(`${endpoint.VOTER}/${id}/voted`),

    delete: (id: string) => instance.delete(`${endpoint.VOTER}/${id}`),   
}

export default VoterService;