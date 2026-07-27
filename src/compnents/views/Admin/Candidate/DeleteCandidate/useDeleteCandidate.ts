import toasterContext from "@/contexts/toasterContext";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import CandidateService from "@/services/candidate.service";

const useDeleteCandidate = (id: string) => {
    const {setToaster} = useContext(toasterContext);

    const DeleteCandidate = async () => {
        const {data} = await CandidateService.delete(id);
        return data;
    }
    
    const {
        mutate:mutateDeleteCandidate, 
        isPending:isPendingDeleteCandidate, 
        isSuccess:isSuccessDeleteCandidate
    } = useMutation({
        mutationFn: DeleteCandidate,
        onError: (error) => {
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: () => {
            setToaster({
                type: "success",
                message: "Kandidat berhasil dihapus"
            });
        }
    })
    

    
    const onDeleteCandidate = () => {
        mutateDeleteCandidate();
    }

    return {
        onDeleteCandidate,
        isPendingDeleteCandidate,
        isSuccessDeleteCandidate
    }
}

export default useDeleteCandidate;