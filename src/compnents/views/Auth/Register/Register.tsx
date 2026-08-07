import {  Alert, Card, CardBody, CardFooter, CardHeader, Input, Link, Spinner } from "@heroui/react";
import useRegister from "./useRegister";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa"
import { Controller } from "react-hook-form";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import Image from 'next/image'


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
			<div className="w-full min-h-screen flex flex-wrap gap-6">
        <div className="bg-inti min-w-86 flex-1 flex items-center p-4">
          <div className="w-1/2 sm:w-2/3 lg:w-3/5 mx-auto">
            <Image 
              src="/logo/auth/register-pilkades-logo.png" 
              alt="register-logo" 
              width={720} 
              height={720} 
              className="w-full mx-auto" 
            />
          </div>
        </div>
          
        <div className="flex-1 flex items-center p-4">
          <div className="w-full max-w-120 mx-auto ">
						<Card>
							<form onSubmit={handleSubmitRegister(onRegister)}>
								<CardHeader className="flex-col">
									<h1 className="font-bold text-utama text-xl">
										Daftar
									</h1>
                  <h1 className="text-utama">
                    Buat akun administrator.
                  </h1>
								</CardHeader>

								<CardBody className="gap-4">
                  <Alert color="warning" hideIcon>
                    <h1 className="text-sm font-semibold">
                      Informasi
                    </h1>
                    <p className="text-sm">
                      Akun yang Anda daftarkan akan menjadi Admin untuk satu penyelenggaraan pemilihan. Setelah berhasil masuk, Anda perlu membuat Election terlebih dahulu sebelum dapat mengelola TPS, petugas, kandidat, maupun proses pemungutan suara.
                    </p>
                  </Alert>

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
											placeholder="Masukkan alamat email" 
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
											placeholder="Masukkan nama lengkap"
											isInvalid={!!errors.name}
											errorMessage={errors?.name?.message}
										/>								
									)} />

									<Controller control={control} name="password" render={({field}) => (
										<Input
											{...field} 
											type={hidePassword.password ? "password" : "text"} 
											variant="bordered" 
											label="Password" 
											labelPlacement="outside" 
											placeholder="Masukkan password" 
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
											label="Konfirmasi Password" 
											labelPlacement="outside" 
											placeholder="Masukkan Konfirmasi password" 
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
                  <p className="text-sm text-red-700">
                    Sudah memiliki akun ? klik <Link href="/auth/login" className="text-sm font-bold text-red-700">Login</Link>
                  </p>
                  <ButtonSolid type="submit" fullWidth isDisabled={isPendingRegister}>
										{isPendingRegister? <Spinner color="default" size="sm" /> : "Daftar"}                     
                  </ButtonSolid>
									
								</CardFooter>
							</form>
						</Card>
					</div>
				</div>
      </div>
    )
}


export default Register;