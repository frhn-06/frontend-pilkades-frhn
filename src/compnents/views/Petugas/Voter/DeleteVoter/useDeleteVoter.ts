import toasterContext from "@/contexts/toasterContext";
import VoterService from "@/services/voter.service";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

const useDeleteVoter = (id: string) => {
    const {setToaster} = useContext(toasterContext);

    const DeleteVoter = async () => {
        const {data} = await VoterService.delete(id);
        return data;
    }
    
    const {
        mutate:mutateDeleteVoter, 
        isPending:isPendingDeleteVoter, 
        isSuccess:isSuccessDeleteVoter
    } = useMutation({
        mutationFn: DeleteVoter,
        onError: (error) => {
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: () => {
            setToaster({
                type: "success",
                message: "Voter berhasil dihapus"
            });
        }
    })
    

    
    const onDeleteVoter = () => {
        mutateDeleteVoter();
    }

    return {
        onDeleteVoter,
        isPendingDeleteVoter,
        isSuccessDeleteVoter
    }
}

export default useDeleteVoter;