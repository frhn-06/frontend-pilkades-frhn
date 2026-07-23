import toasterContext from "@/contexts/toasterContext";
import PetugasService from "@/services/petugas.service";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

const useDeletePetugas = (id: string) => {
    const {setToaster} = useContext(toasterContext);

    const DeletePetugas = async () => {
        const {data} = await PetugasService.delete(id);
        return data;
    }
    
    const {
        mutate:mutateDeletePetugas, 
        isPending:isPendingDeletePetugas, 
        isSuccess:isSuccessDeletePetugas
    } = useMutation({
        mutationFn: DeletePetugas,
        onError: (error) => {
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: () => {
            setToaster({
                type: "success",
                message: "Petugas berhasil dihapus"
            });
        }
    })
    

    
    const onDeletePetugas = () => {
        mutateDeletePetugas();
    }

    return {
        onDeletePetugas,
        isPendingDeletePetugas,
        isSuccessDeletePetugas
    }
}

export default useDeletePetugas;