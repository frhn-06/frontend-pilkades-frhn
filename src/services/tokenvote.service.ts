import instance from "@/libs/axios";
import endpoint from "./endpoint";

const tokenVoteService = {
    create: (voterId: number) => instance.post(`${endpoint.TOKEN}/${voterId}/create`),

    validation : (token: string) => instance.post(`${endpoint.TOKEN}/validation`, {
        token: token
    }),

    findOne: (id: string) => instance.get(`${endpoint.TOKEN}/${id}/find`)
}

export default tokenVoteService;