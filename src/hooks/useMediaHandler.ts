import MediaService from "@/services/media.service";
import { useMutation } from "@tanstack/react-query"


const useMediaHandler = () => {
    const addOneImage = async (file: File, callback: (url: string) => void) => {
        const newForm = new FormData();
        
        newForm.append("file", file);

        const result = await MediaService.uploadSingle(newForm);

        if(result.status === 200) {
            callback(result.data.data.secure_url)
        }

    }

    const {mutate:mutateAddOneImage, isPending: isPendingAddOneImage, isSuccess: isSuccessAddOneImage} = useMutation({
        mutationFn: (object: {file: File, callback: (url: string) => void}) => addOneImage(object.file, object.callback),
    });

    

    const removeOneImage = async(url: string, callback : () => void ) => {
        const result = await MediaService.removeSingle(url);
        if(result.status === 200) {
            callback();
        }
    }

    const {mutate:mutateRemoveOneImage, isPending: isPendingRemoveOneImage, isSuccess: isSuccessRemoveOneImage} = useMutation({
        mutationFn: (object: {url: string, callback: () => void}) => removeOneImage(object.url, object.callback)
    })

    return {
        mutateAddOneImage,
        isPendingAddOneImage,
        isSuccessAddOneImage,

        mutateRemoveOneImage,
        isPendingRemoveOneImage,
        isSuccessRemoveOneImage
    }
}

export default useMediaHandler;