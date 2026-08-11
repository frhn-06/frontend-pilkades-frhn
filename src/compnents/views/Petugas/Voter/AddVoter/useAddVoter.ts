import toasterContext from "@/contexts/toasterContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { schemaVoter } from "./validation";
import VoterService from "@/services/voter.service";
import { IVoter } from "@/types/voter";

const useAddVoter = () => {
    const {setToaster} = useContext(toasterContext);



    const {handleSubmit:handleSubmitVoter, control, formState:{errors}, setError, reset} = useForm({
        resolver: yupResolver(schemaVoter)
    })
        
    
    const addVoter = async (payload: IVoter) => {
        const {data} = await VoterService.create(payload);
        return data;
    }
    
    const {
        mutate:mutateAddVoter, 
        isPending:isPendingAddVoter, 
        isSuccess:isSuccessAddVoter
    } = useMutation({
        mutationFn: (payload: IVoter) => addVoter(payload),
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
                message: "Voter berhasil dibuat"
            });
            reset();
        }
    })
    

    
    const onAddVoter = (payload: IVoter) => {
        const data = {
            name: payload.name,
            ...(payload.nik && payload.nik !== "" && {nik: payload.nik}),
            ...(payload.info && payload.info !== "" && {info: payload.info})
        }
        mutateAddVoter(data);
    }



    return {
        handleSubmitVoter,
        control,
        errors,
        reset,

        onAddVoter,

        isPendingAddVoter,
        isSuccessAddVoter,

    }

}

export default useAddVoter;