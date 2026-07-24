import instance from "@/libs/axios";
import endpoint from "./endpoint";
import { IPetugasForm } from "@/types/petugas";

const PetugasService = {
    create: (payload: IPetugasForm) => instance.post(`${endpoint.PETUGAS}`, payload),

    findAll: (params: string) => instance.get(`${endpoint.PETUGAS}?${params}`),

    findOne: (id: string) => instance.get(`${endpoint.PETUGAS}/${id}`),

    serverFindOne: (id: string, token: string) => instance.get(`${endpoint.PETUGAS}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),

    update: (id: string, payload: IPetugasForm) => instance.patch(`${endpoint.PETUGAS}/${id}`, payload),

    delete: (id: string) => instance.delete(`${endpoint.PETUGAS}/${id}`),

    nonActive: (id: string) => instance.patch(`${endpoint.PETUGAS}/${id}/non-active`),

    active: (id: string) => instance.patch(`${endpoint.PETUGAS}/${id}/active`)
}

export default PetugasService;