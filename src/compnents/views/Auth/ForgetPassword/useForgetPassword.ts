import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { schemaNameDanEmail } from "./validation"
import AuthService from "@/services/auth.service"
import { useMutation } from "@tanstack/react-query"
import { useContext } from "react"
import toasterContext from "@/contexts/toasterContext"
import { useRouter } from "next/router"

const useForgetPassword = () => {
    const {setToaster} = useContext(toasterContext);
    const router = useRouter();

    const {handleSubmit, control, formState:{errors}, setError} = useForm({
        resolver: yupResolver(schemaNameDanEmail)
    })

    const ForgetPassword = async(payload: {identifier: string}) => {
        const {data} = await AuthService.forgetPassword(payload);
        return data;
    }

    const {mutate, isPending:isPendingForget, isSuccess:isSuccessForget} = useMutation({
        mutationFn: (payload: {identifier: string}) => ForgetPassword(payload),
        onError: (error) => {
            setError("root", {
                type: "server",
                message: error.message
            });
            setToaster({
                type: "success",
                message: error.message
            });
        },
        onSuccess: (data) => {
            setToaster({
                type: "success",
                message: "Berhasil mengirim username atau email"
            });
            const email = data.data.email;
            const expired = data.data.expired;

            sessionStorage.setItem("email", email);
            sessionStorage.setItem("expired", expired);

            router.push("/auth/otp");
        }
    })

    const onForgetPassword = (payload: {identifier: string}) => {
        mutate(payload)
    }

    return {
        handleSubmit,
        control,
        errors,
        
        isPendingForget,
        isSuccessForget,

        onForgetPassword
    }
}

export default useForgetPassword;