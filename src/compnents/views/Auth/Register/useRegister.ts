import AuthService from "@/services/auth.service";
import { IRegister } from "@/types/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { schemaRegister } from "./validation";
import { useRouter } from "next/router";
import toasterContext from "@/contexts/toasterContext";


const useRegister = () => {
    const router = useRouter();

    const {setToaster} = useContext(toasterContext);

    const [hidePassword, setHidePassword] = useState({
        password: true,
        confirmPassword: true
    });

    const handleHidePassword = (key: "password" | "confirmPassword") => {
        setHidePassword({
            ...hidePassword,
            [key] : !hidePassword[key]
        })
    }

    const {handleSubmit:handleSubmitRegister, control, formState: {errors}, setError, reset} = useForm({
        resolver: yupResolver(schemaRegister)
    })

    const register = async (payload: IRegister) => {
        const {data} = await AuthService.register(payload);
        return data;
    }

    const {mutate:mutateRegister, isPending:isPendingRegister} = useMutation({
        mutationFn: (payload: IRegister) => register(payload),
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
                message: "Pendaftaran berhasil"
            })
            reset();
            router.push("/");
        }
    })


    const onRegister = (payload: IRegister) => {
        mutateRegister(payload);
    }

    return {
        hidePassword,
        handleHidePassword,

        handleSubmitRegister,
        control,
        errors,

        isPendingRegister,
        onRegister
    }
}

export default useRegister