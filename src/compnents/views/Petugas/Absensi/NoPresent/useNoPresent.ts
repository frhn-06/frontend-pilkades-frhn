import toasterContext from "@/contexts/toasterContext";
import VoterService from "@/services/voter.service";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

const useNoPresent = (id: string) => {
    const {setToaster} = useContext(toasterContext);

    const NoPresent = async () => {
        await VoterService.noPresent(id);
    }
    
    const {
        mutate:mutateNoPresent, 
        isPending:isPendingNoPresent, 
        isSuccess:isSuccessNoPresent,
        isError:isErrorNoPresent
    } = useMutation({
        mutationFn: NoPresent,
        onError: (error) => {
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: () => {
            setToaster({
                type: "success",
                message: "Voter berhasil batal hadir"
            });
        }
    })
    

    
    const onNoPresent = () => {
        mutateNoPresent();
    }

    return {
        onNoPresent,
        isPendingNoPresent,
        isSuccessNoPresent,
        isErrorNoPresent
    }
}

export default useNoPresent;