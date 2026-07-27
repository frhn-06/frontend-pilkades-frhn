import instance from "@/libs/axios";
import { ICandidate } from "@/types/candidate";
import endpoint from "./endpoint";

const CandidateService = {
    create: (payload: ICandidate) => instance.post(`${endpoint.CANDIDATE}`, payload),

    findAll: () => instance.get(`${endpoint.CANDIDATE}`),

    findOne: (id: string) => instance.get(`${endpoint.CANDIDATE}/${id}`),

    update: (id: string, payload: ICandidate) => instance.patch(`${endpoint.CANDIDATE}/${id}`, payload),

    delete: (id: string) => instance.delete(`${endpoint.CANDIDATE}/${id}`)
}

export default CandidateService;