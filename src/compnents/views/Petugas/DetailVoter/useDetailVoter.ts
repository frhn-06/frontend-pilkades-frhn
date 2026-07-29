import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { schemaVoter } from "./validation";
import { useContext } from "react";
import toasterContext from "@/contexts/toasterContext";
import VoterService from "@/services/voter.service";
import { IVoter } from "@/types/voter";

const useDetailVoter = () => {
    const router = useRouter();

    const {setToaster} = useContext(toasterContext);

    
    const getVoter = async() => {
        const {data} = await VoterService.findOne(`${router.query.id}`);
        return data;
    }

    const {data:dataVoter, isLoading:isLoadingVoter, isRefetching:isRefetchingVoter, refetch:refetchVoter, isError:isErrorVoter} = useQuery({
        queryKey: ["Voter", router.query.id],
        queryFn: getVoter,
    });

    

    const {handleSubmit:handleSubmitUpdateVoter, control, setError, setValue, formState:{errors}, reset} = useForm({
        resolver: yupResolver(schemaVoter)
    })

    const updateVoter = async (payload: IVoter) => {
        const {data} = await VoterService.update( `${router.query.id}`, payload);
        return data;
    }
    
    const {
        mutate:mutateUpdateVoter, 
        isPending:isPendingUpdateVoter, 
        isSuccess:isSuccessUpdateVoter
    } = useMutation({
        mutationFn: (payload: IVoter) => updateVoter(payload),
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
                message: "Voter berhasil diupdate"
            });
        }
    })
    

    
    const onUpdateVoter = (payload: IVoter) => {
        const data = {
            name: payload.name,
            nik: payload.nik === "" ? null : payload.nik,
            info:  payload.info === "" ? null : payload.info
        }
        mutateUpdateVoter(data);
    }
    

    return {

        dataVoter,
        isLoadingVoter,
        isRefetchingVoter,
        refetchVoter,
        isErrorVoter,
        reset,

        handleSubmitUpdateVoter,
        control,
        errors,
        setValue,

        onUpdateVoter,
        isPendingUpdateVoter,
        isSuccessUpdateVoter
    }
}

export default useDetailVoter;