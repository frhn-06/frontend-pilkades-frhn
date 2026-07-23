import toasterContext from "@/contexts/toasterContext";
import PetugasService from "@/services/petugas.service";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

const useChangeStatusPetugas = (id: string) => {
    const {setToaster} = useContext(toasterContext);

    const nonActive = async () => {
        const {data} = await PetugasService.nonAktif(id);
        return data;
    }
    
    const {
        mutate:mutateNonActive, 
        isPending:isPendingNonActive, 
        isSuccess:isSuccessNonActive
    } = useMutation({
        mutationFn: nonActive,
        onError: (error) => {
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: () => {
            setToaster({
                type: "success",
                message: "Petugas berhasil dinonaktifkan"
            });
        }
    })
    

    
    const onNonActive = () => {
        mutateNonActive();
    }


    return {
        onNonActive,
        isSuccessNonActive,
        isPendingNonActive
    }
}

export default useChangeStatusPetugas;