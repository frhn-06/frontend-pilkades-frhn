import { Button, Card, CardBody, CardFooter, CardHeader, Input, Spinner } from "@heroui/react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa"
import { Controller } from "react-hook-form";
import useLogin from "./useLogin";
import Link from "next/link";


const Register = () => {
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
          <div className="w-full min-h-screen flex flex-wrap justify-around items-center">
            <div className="w-86 bg-amber-400">
              
            </div>

            <div className="w-86 ">
              <Card>
                <form onSubmit={handleSubmitLogin(onLogin)}>
                  <CardHeader>
                    <h1>
                      Login Admin / Petugas
                    </h1>
                  </CardHeader>

                  <CardBody className="gap-4">
                    {errors?.root && (
                      <p className="text-sm text-danger">
                        {errors?.root?.message}
                      </p>
                    )}

                    <Controller control={control} name="identifier" render={({field}) => (
                      <Input
                        {...field} 
                        variant="bordered" 
                        label="Email" 
                        labelPlacement="outside" 
                        placeholder="example@gmail.com" 
                        isInvalid={!!errors.identifier}
                        errorMessage={errors?.identifier?.message}
                      />				
                    )} />

                    

                    <Controller control={control} name="password" render={({field}) => (
                      <Input
                        {...field} 
                        type={hidePassword ? "password" : "text"} 
                        variant="bordered" 
                        label="Kata Sandi" 
                        labelPlacement="outside" 
                        placeholder="***" 
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
                    <p className="text-sm text-amber-700">
                      Sudah punya admin ? klik <Link href="/auth/register" className="text-sm font-bold text-amber-700">Daftar</Link>
                    </p>
                    <Button type="submit" fullWidth isDisabled={isPendingLogin}>
                      {isPendingLogin? <Spinner color="default" size="sm" /> : "Masuk"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>
          </div>
    )
}


export default Register;