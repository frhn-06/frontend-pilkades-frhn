import { Card, CardBody, CardFooter, CardHeader, InputOtp, Spinner } from "@heroui/react";
import useOtp from "./useOtp";
import { Controller } from "react-hook-form";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Otp = () => {
    const {
      handleSubmit,
      control,
      errors,

      isPendingVerify,
      onVerifyOtp,

      isPendingReSendOtp,
      onReSendOtp
    } = useOtp();

    const router = useRouter();

    useEffect(() => {
      const email = sessionStorage.getItem("email");
      const expired = sessionStorage.getItem("expired");

      if(!email || !expired) {
        router.replace("/auth/forget-password");
        return;
      }

      if(new Date(expired).getTime() < Date.now()) {
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("expired");
        router.replace("/auth/forget-password");
        return;
      }

    }, [router])

    return (
      <div className="w-full min-h-svh flex justify-center items-center">
        <Card className="w-full max-w-120">
          <form onSubmit={handleSubmit(onVerifyOtp)}>
            <CardHeader className="flex-col">
              <h1 className="text-utama font-bold text-xl">
                Verifikasi OTP
              </h1>
            </CardHeader>
            <CardBody className="gap-4">
              <p className="text-second">
                Masukkan 6 digit kode OTP yang telah kami kirim ke email Anda {sessionStorage.getItem("email")}.
              </p>
              <Controller 
                control={control} 
                name="otp" 
                render={({field}) => (
                  <InputOtp 
                    {...field}
                    variant="bordered"
                    errorMessage={errors.otp && errors.otp.message}
                    isInvalid={!!errors.otp}
                    length={6}
                    className="mx-auto"
                  />
                )}
              />

              <p className="text-second">
                Kode OTP akan kadaluarsa dalam 
              </p>
              <p>
                {sessionStorage.getItem("expired")}
              </p>
            </CardBody>
            
            <CardFooter className="flex-col gap-2">
              <ButtonSolid type="submit" isDisabled={isPendingVerify || isPendingReSendOtp}>
                {isPendingVerify ? <Spinner size="sm" color="default" /> : "Verifikasi"}
              </ButtonSolid>
              <div className="w-full flex flex-col items-start gap-2">
                <p>
                  Tidak menerima kode?
                </p>
                <ButtonFlat 
                  type="button" 
                  isDisabled={isPendingVerify || isPendingReSendOtp} 
                  onPress={() => onReSendOtp(`${sessionStorage.getItem("email")}`)}
                >
                  {isPendingReSendOtp ? <Spinner size="sm" color="default" /> : "Kirim ulang OTP"}
                </ButtonFlat>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    )
}

export default Otp;