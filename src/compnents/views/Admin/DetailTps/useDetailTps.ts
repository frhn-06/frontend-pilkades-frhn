import TpsService from "@/services/tps.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import schemaTps from "./validation";
import toasterContext from "@/contexts/toasterContext";
import { ITps } from "@/types/tps";

const useDetailTps = () => {
    const router = useRouter();
    const id = router.query.id;

    const {setToaster} = useContext(toasterContext);

    const findTpsByid = async () => {
        const {data} = await TpsService.findOneForAdmin(`${id}`);
        return data;
    }

    const {data: dataTps, isLoading: isLoadingTps, refetch:refetchTps, isRefetching: isRefetchingTps, isError:isErrorTps} = useQuery({
        queryKey: ["DetailTps"],
        queryFn: findTpsByid,
        enabled: router.isReady &&!!id
    });
    
    
    const {handleSubmit:handleSubmitTps, control, formState: {errors}, setError, reset, setValue} = useForm({
        resolver: yupResolver(schemaTps)
    })
    
    const updateTps = async (payload: ITps) => {
        const {data} = await TpsService.update(`${id}`, payload);
        return data;
    }
    
    const {mutate:mutateUpdateTps, isPending:isPendingUpdateTps, isSuccess:isSuccessUpdateTps} = useMutation({
        mutationFn: (payload: ITps) => updateTps(payload),
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
                message: "TPS berhasil diperbarui"
            })
        }
    })
    

    
    const onUpdateTps = (payload: ITps) => {
        const data = {
            ...payload,
            rt: Number(payload.rt),
            rw: Number(payload.rw)
        }
        mutateUpdateTps(data);
    }


    return {
        dataTps,
        isLoadingTps,
        refetchTps,
        isRefetchingTps,
        isErrorTps,

        handleSubmitTps,
        control,
        errors,
        setValue,

        isPendingUpdateTps,
        isSuccessUpdateTps,
        onUpdateTps
    }
}

export default useDetailTps;