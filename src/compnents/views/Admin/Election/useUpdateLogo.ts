import toasterContext from "@/contexts/toasterContext";
import useMediaHandler from "@/hooks/useMediaHandler";
import ElectionService from "@/services/election.service";
import { ILogoElection } from "@/types/election";
import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useContext } from "react";

const useUpdateLogo = () => {
    const {
            mutateAddOneImage,
            isPendingAddOneImage,
            isSuccessAddOneImage,

        } = useMediaHandler();

    const {setToaster} = useContext(toasterContext);

    const updateImage = async(payload: ILogoElection, callback: () => void) => {
        const {data} = await ElectionService.updateLogo(payload);
        
        if(data.meta.status === 200) {
            callback();
        }        
    }

    const {mutate:mutateUpdateLogo, isPending:isPendingUpdateLogo, isSuccess:isSuccessUpdateLogo} = useMutation({
        mutationFn: (object: {payload: ILogoElection, callback: () => void}) => updateImage(object.payload, object.callback),
        onError: (error) => {
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: () => {
            setToaster({
                type: "success",
                message: "Berhasil mengubah logo"
            })
        }
    })

    const handleChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        
        if(files) {
            const file = files[0];

            mutateAddOneImage({
                file: file,
                callback: (url: string) => {
                    mutateUpdateLogo({
                        payload: {
                            logo: url,
                        },
                        callback: () => {
                            
                        }
                    });
                }
            })
        }
    }


    const removeLogo = async(payload: ILogoElection) => {
        const {data} = await ElectionService.updateLogo(payload);
        return data
    }

    const {mutate:mutateRemoveLogo, isPending:isPendingRemoveLogo, isSuccess:isSuccessRemoveLogo} = useMutation({
        mutationFn: (payload: ILogoElection) => removeLogo(payload),
        onError: (error) => {
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: () => {
            setToaster({
                type: "success",
                message: "Berhasil menghapus logo"
            })
        }
    });

    const handleRemoveLogo = () => {
        mutateRemoveLogo({
            logo: null
        })
    }

    return {
        isPendingAddOneImage,
        isSuccessAddOneImage,

        isPendingUpdateLogo,
        isSuccessUpdateLogo,
        handleChangeImg,

        isPendingRemoveLogo,
        isSuccessRemoveLogo,
        handleRemoveLogo
    }
}

export default useUpdateLogo;