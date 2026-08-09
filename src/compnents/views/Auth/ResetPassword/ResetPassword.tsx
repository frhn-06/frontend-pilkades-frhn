import { Card, CardBody, CardFooter, CardHeader, Input, Spinner } from "@heroui/react";
import useResetPassword from "./useResetPassword";
import { Controller } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ResetPassword = () => {
    const {
      hide,
      handleHidePassword,

      handleSubmit,
      control,
      errors,
      
      isPendingResetPassword,
      onResetPassword
    } = useResetPassword();

    const router = useRouter();

    useEffect(() => {
      if(!sessionStorage.getItem("resetToken")) {
        router.replace("/auth/forget-password");
      }

      
    },[router])


    return (
      <div className="w-full min-h-svh flex justify-center items-center">
        <form onSubmit={handleSubmit(onResetPassword)}>
          <Card className="w-full max-w-90">
            <CardHeader>
              <h1 className="font-bold text-utama text-xl">
                Buat Password Baru
              </h1>
            </CardHeader>

            <CardBody className="gap-4">
              <p className="text-second">
                Masukkan password baru untuk akun Anda. Pastikan password mudah Anda ingat dan tidak digunakan di akun lain.
              </p>

              {errors.root !== undefined && (
                <p className="text-sm text-danger">
                  {errors.root.message}
                </p>
              )}
              
              <Controller 
                control={control}
                name="password"
                render={({field}) => (
                  <Input 
                    {...field}
                    label="Password Baru"
                    placeholder="Masukkan password baru"
                    labelPlacement="outside"
                    type={hide.password ? "password" : "text"}
                    variant="bordered"
                    isInvalid={errors?.password !== undefined}
                    errorMessage={errors?.password?.message}
                    endContent={(
                      <div 
                        className="h-full flex items-center justify-center cursor-pointer" 
                        onClick={() => handleHidePassword("password")}
                      >
                        {hide.password ? <FaEyeSlash /> : <IoEyeSharp />}
                      </div>
                    )}
                  />
                )}
              />

              <Controller 
                control={control}
                name="confirmPassword"
                render={({field}) => (
                  <Input 
                    {...field}
                    label="Konfirmasi Password baru"
                    placeholder="Masukkan kembali password baru"
                    labelPlacement="outside"
                    type={hide.confirmPassword ? "password" : "text"}
                    variant="bordered"
                    isInvalid={errors?.confirmPassword !== undefined}
                    errorMessage={errors?.confirmPassword?.message}
                    endContent={(
                      <div 
                        className="h-full flex items-center justify-center cursor-pointer" 
                        onClick={() => handleHidePassword("confirmPassword")}
                      >
                        {hide.confirmPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                      </div>
                    )}
                  />
                )}
              />
            </CardBody>

            <CardFooter>
              <ButtonSolid type="submit" isDisabled={isPendingResetPassword} fullWidth>
                {isPendingResetPassword ? <Spinner color="default" size="sm" /> : "Simpan"}
              </ButtonSolid>
            </CardFooter>
          </Card>
        </form>
      </div>
    )
}

export default ResetPassword;