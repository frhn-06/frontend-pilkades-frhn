import toasterContext from "@/contexts/toasterContext";
import AuthService from "@/services/auth.service"
import { IUserResetPassword, IVerifyOtp } from "@/types/auth"
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { schemaOtp } from "./validation";

const useOtp = () => {

    const {setToaster} = useContext(toasterContext);

    const router = useRouter();

    const {handleSubmit, control, setValue, formState: {errors}, setError, reset} = useForm({
        resolver: yupResolver(schemaOtp),
        defaultValues: {
            otp: ""
        }
    })

    const verifyOtp = async (payload: IVerifyOtp) => {
        const {data} = await AuthService.verifyOtp(payload);
        return data
    }

    const {mutate:mutateVerify, isPending: isPendingVerify} = useMutation({
        mutationFn: (payload: IVerifyOtp) => verifyOtp(payload),
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
        },
        onSuccess: (data) => {
            setToaster({
                type: "success",
                message: "Verifikasi OTP berhasil"
            });
            sessionStorage.removeItem("email");
            sessionStorage.removeItem("expired");
            sessionStorage.setItem("resetToken", data.data.resetToken);
            router.replace("/auth/reset-password");
            
        }
    });

    const reSendOtp = async (payload: {identifier: string}) => {
        const {data} = await AuthService.forgetPassword(payload);
        return data
    }

    const {mutate:mutateReSendOtp, isPending: isPendingReSendOtp} = useMutation({
        mutationFn: (payload: {identifier: string}) => reSendOtp(payload),
        onError: (error) => {
            setError("root", {
                type: "server",
                message: error.message
            })
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: (data) => {
            setToaster({
                type: "success",
                message: "Kirim ulang OTP berhasil"
            });
            reset();
            sessionStorage.setItem("email", data.data.email);
            sessionStorage.setItem("expired", data.data.expired)
            
        }
    });

    const onVerifyOtp = (payload: IVerifyOtp) => {
        mutateVerify(payload);
    }

    const onReSendOtp = (identifier: string) => {
        const data = {
            identifier
        }
        mutateReSendOtp(data);
    }

    return {
        handleSubmit,
        control,
        setValue,
        errors,

        isPendingVerify,
        onVerifyOtp,

        isPendingReSendOtp,
        onReSendOtp
    }
}

export default useOtp;