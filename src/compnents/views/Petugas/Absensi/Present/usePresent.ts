import toasterContext from "@/contexts/toasterContext";
import VoterService from "@/services/voter.service";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

const usePresent = (id: string) => {
    const {setToaster} = useContext(toasterContext);

    const Present = async () => {
        await VoterService.present(id);
    }
    
    const {
        mutate:mutatePresent, 
        isPending:isPendingPresent, 
        isSuccess:isSuccessPresent,
        isError:isErrorPresent
    } = useMutation({
        mutationFn: Present,
        onError: (error) => {
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: () => {
            setToaster({
                type: "success",
                message: "Voter berhasil menghadiri"
            });
        }
    })
    

    
    const onPresent = () => {
        mutatePresent();
    }

    return {
        onPresent,
        isPendingPresent,
        isSuccessPresent,
        isErrorPresent
    }
}

export default usePresent;