import toasterContext from "@/contexts/toasterContext";
import useMediaHandler from "@/hooks/useMediaHandler";
import ElectionService from "@/services/election.service";
import { IElection } from "@/types/election";
import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useContext } from "react";

const useUpdateLogo = (id: number) => {
    const {
            mutateAddOneImage,
            isPendingAddOneImage,
            isSuccessAddOneImage,
    
            mutateRemoveOneImage,
        } = useMediaHandler();

    const {setToaster} = useContext(toasterContext);

    const updateImage = async(payload: IElection, callback: () => void) => {
        const {data} = await ElectionService.update(payload);
        
        if(data.meta.status === 200) {
            callback();
        }        
    }

    const {mutate:mutateUpdateLogo, isPending:isPendingUpdateLogo, isSuccess:isSuccessUpdateLogo} = useMutation({
        mutationFn: (object: {payload: IElection, callback: () => void}) => updateImage(object.payload, object.callback),
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

    const handleChangeImg = (e: ChangeEvent<HTMLInputElement>, oldLogo: string | null | undefined) => {
        const files = e.target.files;
        
        if(files) {
            const file = files[0];

            mutateAddOneImage({
                file: file,
                callback: (url: string) => {
                    mutateUpdateLogo({
                        payload: {
                            logo: url
                        },
                        callback: () => {
                            if(oldLogo !== null) {
                                mutateRemoveOneImage({
                                    url: `${oldLogo}`,
                                    callback: () => {
                                        
                                    }
                                })
                            }
                        }
                    });
                }
            })
        }
    }

    return {
        isPendingAddOneImage,
        isSuccessAddOneImage,

        isPendingUpdateLogo,
        isSuccessUpdateLogo,

        handleChangeImg
    }
}

export default useUpdateLogo;