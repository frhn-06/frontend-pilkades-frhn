import toasterContext from "@/contexts/toasterContext";
import VoteService from "@/services/vote.service";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

const useModalVoting = (token: string, candidateId: number) => {
    const {setToaster} = useContext(toasterContext);

    const Voting = async () => {
        const {data} = await VoteService.create({
            token,
            candidateId
        });
        return data;
    }
    
    const {
        mutate:mutateVoting, 
        isPending:isPendingVoting, 
        isSuccess:isSuccessVoting
    } = useMutation({
        mutationFn: Voting,
        onError: (error) => {
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: () => {
            setToaster({
                type: "success",
                message: "Voting berhasil"
            });
        }
    })
    

    
    const onVoting = () => {
        mutateVoting();
    }

    return {
        onVoting,
        isPendingVoting,
        isSuccessVoting
    }
}

export default useModalVoting;