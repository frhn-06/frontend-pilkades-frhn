import toasterContext from "@/contexts/toasterContext";
import ElectionService from "@/services/election.service";
import { IStatusElection } from "@/types/election";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";


const useUpdateStatus  = () => {
    const {setToaster} = useContext(toasterContext);
    

        
    
    const updateStatusElection = async (payload: IStatusElection) => {
        const {data} = await ElectionService.status(payload);
        return data;
    }
    
    const {
        mutate:mutateUpdateStatusElection, 
        isPending:isPendingUpdateStatusElection, 
        isSuccess:isSuccessUpdateStatusElection
    } = useMutation({
        mutationFn: (payload: IStatusElection) => updateStatusElection(payload),
        onError: (error) => {
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: () => {
            setToaster({
                type: "success",
                message: "Status election voting pemilihan berhasil diupdate"
            })
        }
    })
    

    
    const onUpdateStatusElection = (payload: IStatusElection) => {
        mutateUpdateStatusElection(payload);       
    }

    return {
        isPendingUpdateStatusElection,
        isSuccessUpdateStatusElection,
        onUpdateStatusElection
    }
}

export default useUpdateStatus;