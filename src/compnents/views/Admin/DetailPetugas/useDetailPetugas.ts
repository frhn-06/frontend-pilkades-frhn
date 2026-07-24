import PetugasService from "@/services/petugas.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { schemaPetugas } from "./validation";
import { IPetugasForm } from "@/types/petugas";
import { useContext, useState } from "react";
import toasterContext from "@/contexts/toasterContext";
import TpsService from "@/services/tps.service";

const useDetailPetugas = () => {
    const router = useRouter();

    const {setToaster} = useContext(toasterContext);

    const [hidePassword, setHidePassword] = useState(true);
    
    const handleHide = () => {
        setHidePassword(!hidePassword);
    }
    

    
    const getPetugas = async() => {
        const {data} = await PetugasService.findOne(`${router.query.id}`);
        return data;
    }

    const {data:dataPetugas, isLoading:isLoadingPetugas, isRefetching:isRefetchingPetugas, refetch:refetchPetugas, isError:isErrorPetugas} = useQuery({
        queryKey: ["Petugas", router.query.id],
        queryFn: getPetugas,
    });

    const getManyTps = async() => {
        const {data} = await TpsService.findAll();
        return data;
    }

    const {data:dataTpsInputUpdate, isLoading:isLoadingTpsInputUpdate} = useQuery({
        queryKey: ["TpsInputUpdate"],
        queryFn: getManyTps,
    });



    

    const {handleSubmit:handleSubmitUpdatePetugas, control, setError, setValue, formState:{errors}} = useForm({
        resolver: yupResolver(schemaPetugas)
    })

    const updatePetugas = async (payload: IPetugasForm) => {
        const {data} = await PetugasService.update( `${router.query.id}`, payload);
        return data;
    }
    
    const {
        mutate:mutateUpdatePetugas, 
        isPending:isPendingUpdatePetugas, 
        isSuccess:isSuccessUpdatePetugas
    } = useMutation({
        mutationFn: (payload: IPetugasForm) => updatePetugas(payload),
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
                message: "Petugas berhasil diupdate"
            });
        }
    })
    

    
    const onUpdatePetugas = (payload: IPetugasForm) => {
        const data = {
            ...payload,
            tpsId: Number(payload.tpsId)
        }
        mutateUpdatePetugas(data);
    }
    

    return {
        hidePassword,
        handleHide,

        dataPetugas,
        isLoadingPetugas,
        isRefetchingPetugas,
        refetchPetugas,
        isErrorPetugas,

        dataTpsInputUpdate,
        isLoadingTpsInputUpdate,


        handleSubmitUpdatePetugas,
        control,
        errors,
        setValue,

        onUpdatePetugas,
        isPendingUpdatePetugas,
        isSuccessUpdatePetugas
    }
}

export default useDetailPetugas;