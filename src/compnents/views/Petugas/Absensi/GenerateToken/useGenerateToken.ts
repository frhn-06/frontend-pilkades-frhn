import toasterContext from "@/contexts/toasterContext";
import tokenVoteService from "@/services/tokenvote.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useContext } from "react";

const useGenerateToken = (id: number) => {
    const {setToaster} = useContext(toasterContext);
    const router = useRouter();

    const GenerateToken = async () => {
        const {data} = await tokenVoteService.create(id);
        return data;
    }
    
    const {
        mutate:mutateGenerateToken, 
        isPending:isPendingGenerateToken, 
        isSuccess:isSuccessGenerateToken,
        isError:isErrorGenerateToken
    } = useMutation({
        mutationFn: GenerateToken,
        onError: (error) => {
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: (data) => {
            setToaster({
                type: "success",
                message: "Token berhasil digenerate"
            });
            const tokenId = data.data.id;
            router.push(`/petugas/token/${tokenId}`)
        }
    })
    

    
    const onGenerateToken = () => {
        mutateGenerateToken();
    }

    return {
        onGenerateToken,
        isPendingGenerateToken,
        isSuccessGenerateToken,
        isErrorGenerateToken
    }
}

export default useGenerateToken;