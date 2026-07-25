import toasterContext from "@/contexts/toasterContext";
import ElectionService from "@/services/election.service";
import { IElection } from "@/types/election";
import convert from "@/utils/convert";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { UseFormSetError } from "react-hook-form";
import { IElectionForm } from "./validation";


const useUpdateElection  = (id: number, setError: UseFormSetError<IElectionForm>) => {
    const {setToaster} = useContext(toasterContext);
    

        
    
    const updateElection = async (payload: IElection) => {
        const {data} = await ElectionService.update(payload);
        return data;
    }
    
    const {
        mutate:mutateUpdateElection, 
        isPending:isPendingUpdateElection, 
        isSuccess:isSuccessUpdateElection
    } = useMutation({
        mutationFn: (payload: IElection) => updateElection(payload),
        onError: (error) => {
            setError("root", {
                type: "server",
                message: error.message
            });
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: () => {
            setToaster({
                type: "success",
                message: "Eleksi pilkades berhasil diupdate"
            })
        }
    })
    

    
    const onUpdateElection = (payload: IElection) => {
        const data = {
            ...payload,
            startAt: convert.dateToBackend(`${payload.startAt}`),
            endAt: convert.dateToBackend(`${payload.endAt}`),
        }
        
        mutateUpdateElection(data);
       
    }

    return {
        mutateUpdateElection,
        isPendingUpdateElection,
        isSuccessUpdateElection,
        onUpdateElection
    }
}

export default useUpdateElection;