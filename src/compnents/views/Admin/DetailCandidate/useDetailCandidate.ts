import CandidateService from "@/services/candidate.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useFieldArray, useForm } from "react-hook-form";
import schemaCandidate from "./validation";
import { ICandidate } from "@/types/candidate";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ChangeEvent, useContext } from "react";
import toasterContext from "@/contexts/toasterContext";
import useMediaHandler from "@/hooks/useMediaHandler";

const useDetailCandidate = () => {
    const router = useRouter();

    const {setToaster} = useContext(toasterContext);

    const {
        mutateAddOneImage,
        isPendingAddOneImage,
        isSuccessAddOneImage,

        mutateRemoveOneImage,
        isPendingRemoveOneImage,
        isSuccessRemoveOneImage
    } = useMediaHandler();

    const getCandidate = async() => {
        const {data} = await CandidateService.findOne(`${router.query.id}`);
        return data;
    }

    const {
        data:dataCandidate, 
        isLoading:isLoadingCandidate, 
        isRefetching:isRefetchingCandidate, 
        refetch:refetchCandidate, 
        isError:isErrorCandidate
    } = useQuery({
        queryKey: ["DetailCandidate", router.query.id],
        queryFn: getCandidate,
    });




    const {
        handleSubmit:handleSubmitUpdateCandidate, 
        control, 
        setError, 
        setValue, 
        formState:{errors},
        watch,
        reset,
        getValues
    } = useForm({
        resolver: yupResolver(schemaCandidate)
    })

    const fotoLoad = watch("img");

    const {fields, append, remove} = useFieldArray({
        control,
        name: "members"
    })




    const handleChangeImg = (e:ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if(files && files.length > 0) {
            mutateAddOneImage({
                file: files[0],
                callback: (url: string) => {
                    setValue("img", url)
                }
            })
        }
    }

    const handleRemoveImg = (url: string, onChange: (file: FileList | null) => void) => {
        mutateRemoveOneImage({
            url: url,
            callback: () => {
                onChange(null)
                setValue("img", "")
            }
        })
    }




    const updateCandidate = async (payload: ICandidate) => {
        const {data} = await CandidateService.update( `${router.query.id}`, payload);
        return data;
    }
    
    const {
        mutate:mutateUpdateCandidate, 
        isPending:isPendingUpdateCandidate, 
        isSuccess:isSuccessUpdateCandidate
    } = useMutation({
        mutationFn: (payload: ICandidate) => updateCandidate(payload),
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
                message: "Candidate berhasil diupdate"
            });
        }
    })

    const onUpdateCandidate = (payload: ICandidate) => {
        const data = {
            nomor: Number(payload.nomor),
            vision: payload.vision,
            mission: payload.mission,
            oldImg: payload.oldImg,
            ...(payload.img !== null ? {img: payload.img} : {img: payload.oldImg}),
            members: payload.members?.map((member) => {
                return {
                    name: member.name,
                    position: member.position,
                    order: member.order,
                    ...(member.img !== null && {img: member.img})
                }
            })
        }

        mutateUpdateCandidate(data);
    }


    return {
        isPendingAddOneImage,
        isSuccessAddOneImage,
        handleChangeImg,

        isPendingRemoveOneImage,
        isSuccessRemoveOneImage,
        handleRemoveImg,

        dataCandidate,
        isLoadingCandidate,
        refetchCandidate,
        isRefetchingCandidate,
        isErrorCandidate,

        handleSubmitUpdateCandidate,
        control,
        errors,
        reset,
        getValues,

        fotoLoad,

        fields,
        append,
        remove,
        
        isPendingUpdateCandidate,
        isSuccessUpdateCandidate,

        onUpdateCandidate,
    }
}

export default useDetailCandidate;