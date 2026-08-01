import instance from "@/libs/axios";
import { IVote } from "@/types/vote";
import endpoint from "./endpoint";

const VoteService = {
    create: (payload: IVote) => instance.post(`${endpoint.VOTE}`, payload)
}

export default VoteService