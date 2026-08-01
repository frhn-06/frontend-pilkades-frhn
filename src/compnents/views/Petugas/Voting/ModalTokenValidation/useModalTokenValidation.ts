import tokenVoteService from "@/services/tokenvote.service"
import { useMutation } from "@tanstack/react-query";
import { SetStateAction, useContext } from "react";
import toasterContext from "@/contexts/toasterContext";

const useModalTokenValidation = (setTokenValidate: React.Dispatch<SetStateAction<string>>) => {
    const {setToaster} = useContext(toasterContext);

    const validation = async(token: string) => {
        const {data} = await tokenVoteService.validation(token);
        return data;
    }

    const {mutate:mutateValidationToken, isPending:isPendingValidationToken, isSuccess: isSuccessValidationToken, isError:isErrorValidationToken, error:errorValidationToken} = useMutation({
        mutationFn: (token: string) => validation(token),
        onError: (error) => {
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: (data) => {
            setToaster({
                type: "success",
                message: "Token Vote valid"
            })
            setTokenValidate(data.data.token);
        }
    });

    const onValidation = (token: string) => {
        mutateValidationToken(token)
    }

    return {
        isPendingValidationToken,
        isSuccessValidationToken,
        isErrorValidationToken,
        errorValidationToken,
        onValidation
    }
}

export default useModalTokenValidation;