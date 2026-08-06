import { Card, CardBody, CardFooter, CardHeader, Input, Link, Spinner } from "@heroui/react";
import useForgetPassword from "./useForgetPassword";
import { error } from "console";
import { Controller } from "react-hook-form";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";

const ForgetPassword = () => {
    const {
      handleSubmit,
      control,
      errors,
      
      isPendingForget,
      isSuccessForget,

      onForgetPassword
    } = useForgetPassword()

    return (
      <div className="w-full h-svh flex justify-center items-center">
        <Card className="w-full max-w-90 p-2">
          <form onSubmit={handleSubmit(onForgetPassword)}>
            <CardHeader className="flex-col items-start">
              <h1 className="text-utama font-bold">
                Lupa Password?
              </h1>
              <p className="text-second text-sm">
                Masukkan email atau username yang terdaftar. Kami akan mengirimkan kode OTP untuk memverifikasi identitas Anda sebelum mengatur ulang password.
              </p>
            </CardHeader>

            <CardBody className="gap-3">
              
              {errors.root !== undefined && (
                <p className="text-sm text-danger">
                  {errors.root.message}
                </p>
              )}

              <Controller control={control} name="identifier" render={({field}) => (
                <Input 
                  {...field}
                  variant="bordered"
                  isInvalid={errors?.identifier !== undefined}
                  errorMessage={errors?.identifier?.message}
                  placeholder="Masukkan Email atau Nama"
                  label="Email atau Nama"
                  labelPlacement="outside"
                />
              )} />
            </CardBody>

            <CardFooter className="flex-col items-start gap-2">
              <ButtonSolid type="submit" isDisabled={isPendingForget}>
                {isPendingForget ? <Spinner size="sm" color="default" /> : "Kirim Kode OTP"}
              </ButtonSolid>
              
              <Link href="/auth/login" className="text-sm text-red-700">
                Kembali ke Login?
              </Link>
            </CardFooter>
          </form>
        </Card>
      </div>
    )
}

export default ForgetPassword;