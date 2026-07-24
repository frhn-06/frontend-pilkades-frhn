import toasterContext from "@/contexts/toasterContext";
import PetugasService from "@/services/petugas.service";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

const useChangeStatusPetugas = (id: string) => {
    const {setToaster} = useContext(toasterContext);

    const nonActive = async () => {
        const {data} = await PetugasService.nonActive(id);
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



    const active = async () => {
        const {data} = await PetugasService.active(id);
        return data;
    }
    
    const {
        mutate:mutateActive, 
        isPending:isPendingActive, 
        isSuccess:isSuccessActive
    } = useMutation({
        mutationFn: active,
        onError: (error) => {
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: () => {
            setToaster({
                type: "success",
                message: "Petugas berhasil diaktifkan"
            });
        }
    })
    

    
    const onActive = () => {
        mutateActive();
    }


    return {
        onNonActive,
        isSuccessNonActive,
        isPendingNonActive,

        onActive,
        isSuccessActive,
        isPendingActive
    }
}

export default useChangeStatusPetugas;