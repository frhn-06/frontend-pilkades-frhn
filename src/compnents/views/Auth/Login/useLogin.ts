import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { schemaLogin } from "./validation"
import { useContext, useState } from "react"
import { ILogin } from "@/types/auth"
import { useMutation } from "@tanstack/react-query"
import toasterContext from "@/contexts/toasterContext"
import { useRouter } from "next/router"
import { signIn } from "next-auth/react"

const useLogin = () => {
    const {setToaster} = useContext(toasterContext);

    const router = useRouter();

    const [hidePassword, setHidePassword] = useState(true);

    const handleHidePassword = () => {
        setHidePassword(!hidePassword);
    }

    const {handleSubmit:handleSubmitLogin, control, formState: {errors}, setError, reset} = useForm({
        resolver: yupResolver(schemaLogin)
    });

    const callbackUrl = router.query.callbackUrl as string || "/";
    
    const login = async (payload: ILogin) => {
        const result = await signIn("credentials", {
            identifier: payload.identifier,
            password: payload.password,
            callbackUrl: callbackUrl
        });

        if(result?.error && result?.status === 401) {
            throw new Error("email atau username tidak sesuai dengan password anda")
        }
        
    }
    
    const {mutate:mutateLogin, isPending:isPendingLogin} = useMutation({
        mutationFn: (payload: ILogin) => login(payload),
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
                message: "Login berhasil"
            })
            reset();
        }
    })
    
    
    const onLogin = (payload: ILogin) => {
        mutateLogin(payload);
    }
    
    
    return {
        hidePassword,
        handleHidePassword,

        handleSubmitLogin,
        control,
        errors,

        isPendingLogin,
        onLogin
    }   
}

export default useLogin;