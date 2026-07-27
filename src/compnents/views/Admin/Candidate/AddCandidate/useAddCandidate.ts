import { yupResolver } from "@hookform/resolvers/yup"
import { useFieldArray, useForm } from "react-hook-form"
import schemaCandidate from "./validation"
import { ICandidate } from "@/types/candidate"
import CandidateService from "@/services/candidate.service"
import { useMutation } from "@tanstack/react-query"
import { ChangeEvent, useContext } from "react"
import toasterContext from "@/contexts/toasterContext"
import useMediaHandler from "@/hooks/useMediaHandler"

const useAddCandidate = () => {
    const {setToaster} = useContext(toasterContext);

    const {
        mutateAddOneImage,
        isPendingAddOneImage,
        isSuccessAddOneImage,

        mutateRemoveOneImage,
        isPendingRemoveOneImage,
        isSuccessRemoveOneImage
    } = useMediaHandler();

    const {
        handleSubmit: handleSubmitCandidate, 
        control, 
        formState: {errors}, 
        watch, 
        setValue, 
        setError, 
        reset,
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
    

    const addCandidate = async(payload: ICandidate) => {
        const {data} = await CandidateService.create(payload);
        return data;
    }

    const {
        mutate:mutateCandidate, 
        isPending:isPendingCandidate, 
        isSuccess:isSuccessCandidate
    } = useMutation({
        mutationFn: (payload: ICandidate) => addCandidate(payload),
        onError: (error) => {
            setError("root", {
                type: "error",
                message: error.message
            })
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: () => {
            setToaster({
                type: "success",
                message: "Berhasil membuat data kandidat"
            })
            reset();
        }
    });

    const onAddCandidate = (payload: ICandidate) => {
        const data = {
            ...payload,
            nomor: Number(payload.nomor)
        }

        mutateCandidate(data);
    }


    return {
        isPendingAddOneImage,
        isSuccessAddOneImage,

        isPendingRemoveOneImage,
        isSuccessRemoveOneImage,

        handleSubmitCandidate,
        control,
        errors,
        reset,

        fotoLoad,

        fields,
        append,
        remove,

        handleChangeImg,
        handleRemoveImg,

        isPendingCandidate,
        isSuccessCandidate,

        onAddCandidate
    }
}


export default useAddCandidate;