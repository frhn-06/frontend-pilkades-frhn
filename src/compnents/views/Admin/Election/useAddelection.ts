import toasterContext from "@/contexts/toasterContext";
import ElectionService from "@/services/election.service";
import { IElection } from "@/types/election";
import convert from "@/utils/convert";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { UseFormSetError } from "react-hook-form";
import { IElectionForm } from "./validation";


const useAddElection  = (setError: UseFormSetError<IElectionForm>) => {
    const {setToaster} = useContext(toasterContext);
        
    
    const addElection = async (payload: IElection) => {
        const {data} = await ElectionService.create(payload);
        return data;
    }
    
    const {
        mutate:mutateAddElection, 
        isPending:isPendingAddElection, 
        isSuccess:isSuccessAddElection
    } = useMutation({
        mutationFn: (payload: IElection) => addElection(payload),
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
                message: "Eleksi voting pemilihan berhasil dibuat"
            })
        }
    })
    

    
    const onAddElection = (payload: IElection) => {
        const data = {
            ...payload,
            startAt: convert.dateToBackend(`${payload.startAt}`),
            endAt: convert.dateToBackend(`${payload.endAt}`)
        }

        mutateAddElection(data)
    }

    return {
        mutateAddElection,
        isPendingAddElection,
        isSuccessAddElection,
        onAddElection
    }
}

export default useAddElection;