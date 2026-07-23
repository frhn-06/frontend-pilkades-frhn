import toasterContext from "@/contexts/toasterContext";
import PetugasService from "@/services/petugas.service";
import { IPetugasForm } from "@/types/petugas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useForm, UseFormSetError } from "react-hook-form";
import { schemaPetugas } from "./validation";
import TpsService from "@/services/tps.service";

const useAddPetugas = () => {
    const {setToaster} = useContext(toasterContext);

    const [hidePassword, setHidePassword] = useState(true);

    const handleHide = () => {
        setHidePassword(!hidePassword);
    }



    const {handleSubmit:handleSubmitPetugas, control, formState:{errors}, setError, reset} = useForm({
        resolver: yupResolver(schemaPetugas)
    })
        
    
    const addPetugas = async (payload: IPetugasForm) => {
        const {data} = await PetugasService.create(payload);
        return data;
    }
    
    const {
        mutate:mutateAddPetugas, 
        isPending:isPendingAddPetugas, 
        isSuccess:isSuccessAddPetugas
    } = useMutation({
        mutationFn: (payload: IPetugasForm) => addPetugas(payload),
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
                message: "Petugas berhasil dibuat"
            });
            reset();
        }
    })
    

    
    const onAddPetugas = (payload: IPetugasForm) => {
        const data = {
            ...payload,
            tpsId: Number(payload.tpsId)
        }
        mutateAddPetugas(data);
    }



    const getTps = async () => {
        const {data} = await TpsService.findAll();
        return data;
    }
    const {data:dataTpsInput, isLoading:isLoadingTpsInput} = useQuery({
        queryKey: ["Tps-input"],
        queryFn: getTps,
    })

    return {
        handleSubmitPetugas,
        control,
        errors,
        reset,

        onAddPetugas,

        isPendingAddPetugas,
        isSuccessAddPetugas,


        dataTpsInput,
        isLoadingTpsInput,

        hidePassword,
        handleHide
    }

}

export default useAddPetugas;