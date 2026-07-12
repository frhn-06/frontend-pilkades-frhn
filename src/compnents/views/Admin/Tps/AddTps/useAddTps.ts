import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react"
import { useForm } from "react-hook-form";
import schemaTps from "./validation";
import toasterContext from "@/contexts/toasterContext";
import TpsService from "@/services/tps.service";
import { ITps } from "@/types/tps";


const useAddTps = () => {

    const {setToaster} = useContext(toasterContext);


    const {handleSubmit:handleSubmitTps, control, formState: {errors}, setError, reset} = useForm({
        resolver: yupResolver(schemaTps)
    })

    const createTps = async (payload: ITps) => {
        const {data} = await TpsService.create(payload);
        return data;
    }

    const {mutate:mutateTps, isPending:isPendingTps, isSuccess:isSuccessTps} = useMutation({
        mutationFn: (payload: ITps) => createTps(payload),
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
                message: "TPS berhasil dibuat"
            })
            reset();
        }
    })


    const onTps = (payload: ITps) => {
        const data = {
            ...payload,
            rt: Number(payload.rt),
            rw: Number(payload.rw)
        }
        mutateTps(data);
    }

    return {
        handleSubmitTps,
        control,
        errors,
        reset,

        isPendingTps, 
        isSuccessTps,
        onTps
    }
}

export default useAddTps