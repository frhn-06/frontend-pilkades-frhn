import { Button, Card, CardBody, CardFooter, CardHeader, Input, Link, Spinner } from "@heroui/react";
import useRegister from "./useRegister";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa"
import { Controller } from "react-hook-form";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";


const Register = () => {
		const {
			hidePassword,
			handleHidePassword,

			handleSubmitRegister,
      control,
      errors,

      isPendingRegister,
			onRegister
		} = useRegister();

    return (
					<div className="w-full min-h-screen flex flex-wrap justify-around items-center">
						<div className="w-86 bg-amber-400">
							
						</div>

						<div className="w-86 ">
							<Card>
								<form onSubmit={handleSubmitRegister(onRegister)}>
									<CardHeader>
										<h1>
											SignUp For Admin 
										</h1>
									</CardHeader>

									<CardBody className="gap-4">
										{errors?.root && (
											<p className="text-sm text-danger">
												{errors?.root?.message}
											</p>
										)}

										<Controller control={control} name="email" render={({field}) => (
											<Input
												{...field} 
												variant="bordered" 
												label="Email" 
												labelPlacement="outside" 
												placeholder="example@gmail.com" 
												isInvalid={!!errors.email}
												errorMessage={errors?.email?.message}
											/>				
										)} />

										<Controller control={control} name="name" render={({field}) => (
											<Input
												{...field} 
												variant="bordered" 
												label="Nama" 
												labelPlacement="outside" 
												placeholder="nama lengkap"
												isInvalid={!!errors.name}
												errorMessage={errors?.name?.message}
											/>									
										)} />

										<Controller control={control} name="password" render={({field}) => (
											<Input
												{...field} 
												type={hidePassword.password ? "password" : "text"} 
												variant="bordered" 
												label="Kata Sandi" 
												labelPlacement="outside" 
												placeholder="***" 
												isInvalid={!!errors.password}
												errorMessage={errors?.password?.message}
												endContent={(
													<div className="h-full flex items-center justify-center cursor-pointer" onClick={() => handleHidePassword("password")}>
														{hidePassword.password ? <FaEyeSlash /> : <IoEyeSharp />}
													</div>
												)} 
											/>									
										)} />
										
										<Controller control={control} name="confirmPassword" render={({field}) => (
											<Input
												{...field} 
												type={hidePassword.confirmPassword ? "password" : "text"} 
												variant="bordered" 
												label="Konfirmasi Kata Sandi" 
												labelPlacement="outside" 
												placeholder="***" 
												isInvalid={!!errors.confirmPassword}
												errorMessage={errors?.confirmPassword?.message}
												endContent={(
													<div className="h-full flex items-center justify-center cursor-pointer" onClick={() => handleHidePassword("confirmPassword")}>
														{hidePassword.confirmPassword ? <FaEyeSlash /> : <IoEyeSharp />}
													</div>
												)} 
											/>
										)} />

									</CardBody>

									<CardFooter className="flex-col gap-4">
                    <p className="text-sm text-amber-700">
                      Sudah punya akun ? klik <Link href="/auth/login" className="text-sm font-bold text-amber-700">Login</Link>
                    </p>
                    <ButtonSolid type="submit" fullWidth isDisabled={isPendingRegister}>
											{isPendingRegister? <Spinner color="default" size="sm" /> : "Daftar"}                      
                    </ButtonSolid>
										
									</CardFooter>
								</form>
							</Card>
						</div>
					</div>
      
    )
}


export default Register;