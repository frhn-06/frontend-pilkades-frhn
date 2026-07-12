import instance from "@/libs/axios";
import endpoint from "./endpoint";
import { ITps } from "@/types/tps";

const TpsService = {
    create: (payload: ITps) => instance.post(`${endpoint.TPS}`, payload),

    findAll: () => instance.get(`/all-tps`),

    findOneForAdmin: (id: string) => instance.get(`${endpoint.TPS}/${id}/admin`),

    findOneForPetugas: () => instance.get(`${endpoint.TPS}/petugas`),

    update: (id: string, payload: ITps) => instance.patch(`${endpoint.TPS}/${id}`, payload),

    delete: (id: string) => instance.delete(`${endpoint.TPS}/${id}`)
} 

export default TpsService;