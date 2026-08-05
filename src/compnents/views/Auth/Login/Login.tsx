import { Alert, Card, CardBody, CardFooter, CardHeader, Input, Spinner } from "@heroui/react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa"
import { Controller } from "react-hook-form";
import useLogin from "./useLogin";
import Link from "next/link";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import Image from 'next/image'


const Login = () => {
    const {
      hidePassword,
      handleHidePassword,

      handleSubmitLogin,
      control,
      errors,

      isPendingLogin,
      onLogin
    } = useLogin();

    return (
      <div className="w-full min-h-screen flex flex-wrap gap-6">
        <div className="bg-inti min-w-86 flex-1 flex items-center p-4">
          <div className="w-1/2 sm:w-2/3 lg:w-3/5 mx-auto">
            <Image 
              src="/logo/auth/login-pilkades-logo.png" 
              alt="login-logo" 
              width={720} 
              height={720} 
              className="w-full mx-auto" 
            />
          </div>
        </div>

        <div className="flex-1 flex items-center p-4">
          <div className="w-full max-w-90 mx-auto ">
            <Card className="p-2">
              <form onSubmit={handleSubmitLogin(onLogin)}>
                <CardHeader className="flex-col">
                  <h1 className="font-bold text-utama text-xl">
										Masuk
									</h1>
                  <h1 className=" text-utama">
                    Masuk menggunakan akun Admin atau Petugas untuk mengakses sistem pemilihan.
                  </h1>
                </CardHeader>

                <CardBody className="gap-4">
                  <Alert color="warning" hideIcon>
                    <h1 className="text-xs lg:text-sm font-semibold">
                      Informasi
                    </h1>
                    <p className="text-xs lg:text-sm">
                      Halaman ini dapat digunakan oleh Admin maupun Petugas. Pastikan Anda menggunakan akun yang telah terdaftar.
                    </p>
                  </Alert>

                  {errors?.root && (
                    <p className="text-sm text-danger">
                      {errors?.root?.message}
                    </p>
                  )}

                  <Controller control={control} name="identifier" render={({field}) => (
                    <Input
                      {...field} 
                      variant="bordered" 
                      label="Nama atau Email" 
                      labelPlacement="outside" 
                      placeholder="Masukkan nama atau alamat email" 
                      isInvalid={!!errors.identifier}
                      errorMessage={errors?.identifier?.message}
                    />				
                  )} />

                  

                  <Controller control={control} name="password" render={({field}) => (
                    <Input
                      {...field} 
                      type={hidePassword ? "password" : "text"} 
                      variant="bordered" 
                      label="Password" 
                      labelPlacement="outside" 
                      placeholder="Masukkan password" 
                      isInvalid={!!errors.password}
                      errorMessage={errors?.password?.message}
                      endContent={(
                        <div className="h-full flex items-center justify-center cursor-pointer" onClick={() => handleHidePassword()}>
                          {hidePassword ? <FaEyeSlash /> : <IoEyeSharp />}
                        </div>
                      )} 
                    />									
                  )} />

                </CardBody>

                <CardFooter className="flex-col gap-4">
                  <p className="text-sm text-red-700">
                    Belum memiliki akun Admin atau Petugas? <Link href="/auth/register" className="text-sm font-bold text-red-700">Daftar</Link>
                  </p>
                  <ButtonSolid type="submit" fullWidth isDisabled={isPendingLogin}>
                    {isPendingLogin? <Spinner color="default" size="sm" /> : "Masuk"}
                  </ButtonSolid>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    )
}


export default Login;