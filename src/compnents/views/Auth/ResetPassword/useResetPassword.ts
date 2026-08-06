import toasterContext from "@/contexts/toasterContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { schemaResetPassword } from "./validation";
import { IUserResetPassword } from "@/types/auth";
import AuthService from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";

const useResetPassword = () => {
    const {setToaster} = useContext(toasterContext);

    const router = useRouter();


    const [hide, setHide] = useState({
        password: true,
        confirmPassword: true
    });

    const handleHidePassword = (key : "password" | "confirmPassword") => {
        setHide({
            ...hide,
            [key]: !hide[key]
        })
    }

    const {handleSubmit, control,  formState: {errors}, setError, reset} = useForm({
        resolver: yupResolver(schemaResetPassword)
    })

    const resetPassword = async (payload: IUserResetPassword) => {
        const {data} = await AuthService.resetPassword(payload);
        return data
    }

    const {mutate:mutateResetPassword, isPending: isPendingResetPassword} = useMutation({
        mutationFn: (payload: IUserResetPassword) => resetPassword(payload),
        onError: (error) => {
            setError("root", {
                type: "server",
                message: error.message
            })
            setToaster({
                type: "error",
                message: error.message
            });
            reset();
            if(error.message === "jwt expired") {
                sessionStorage.removeItem("resetToken");
            } 
        },
        onSuccess: () => {
            setToaster({
                type: "success",
                message: "Password berhasil diperbarui"
            });
           
            sessionStorage.removeItem("resetToken");
            router.replace("/auth/login");
        }
    });



    const onResetPassword = (payload: {password: string; confirmPassword: string}) => {
        const data = {
            ...payload,
            resetToken: `${sessionStorage.getItem("resetToken")}`
        }
        mutateResetPassword(data);
    }

    return {
        hide,
        handleHidePassword,

        handleSubmit,
        control,
        errors,
        
        isPendingResetPassword,
        onResetPassword
    }
}

export default useResetPassword