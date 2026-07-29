import { Card, CardBody, CardFooter, CardHeader, Input, Select, SelectItem, Skeleton, Spinner } from "@heroui/react"
import useDetailPetugas from "./useDetailPetugas";
import { Controller } from "react-hook-form";
import { useEffect } from "react";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { ITps } from "@/types/tps";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

const DetailPetugas = () => {
    const {
        hidePassword,
        handleHide,

        dataPetugas,
        isLoadingPetugas,
        isRefetchingPetugas,
        refetchPetugas,
        isErrorPetugas,

        dataTpsInputUpdate,
        isLoadingTpsInputUpdate,
        

        handleSubmitUpdatePetugas,
        control,
        errors,
        setValue,

        onUpdatePetugas,
        isPendingUpdatePetugas,
        isSuccessUpdatePetugas
    } = useDetailPetugas();

    useEffect(() => {
      if(dataPetugas) {
        setValue("name", `${dataPetugas.data.name}`);
        setValue("email", `${dataPetugas.data.email}`);
        setValue("tpsId", `${dataPetugas.data.tpsId}`);
      }
    },[dataPetugas])

    useEffect(() => {
      if(isSuccessUpdatePetugas) {
        refetchPetugas();
      }
    },[isSuccessUpdatePetugas])



    return (
      isErrorPetugas ? (
        <div className="flex flex-col justify-center items-center">
          <p className="mt-12">
            not found
          </p>
        </div>
      ) : (
        <div>
          <Card className="max-w-140 z-0">
            <form onSubmit={handleSubmitUpdatePetugas(onUpdatePetugas)}>
              <CardHeader>
                Petugas
              </CardHeader>

              <CardBody className="gap-4">
                {errors.root !== undefined && (
                  <p className="text-sm text-danger">
                    {errors.root.message}
                  </p>
                )} 

                <Controller control={control} name="name" render={({field}) => (
                  <Skeleton isLoaded={!!dataPetugas?.data?.name} className="rounded-xl">
                    <Input
                      {...field} 
                      variant="bordered"
                      label="Nama"
                      labelPlacement="outside"
                      placeholder="Nama"
                      isInvalid={errors.name !== undefined}
                      errorMessage={errors.name?.message}
                    />
                  </Skeleton>
                )} />

                <Controller control={control} name="email" render={({field}) => (
                  <Skeleton isLoaded={!!dataPetugas?.data?.email} className="rounded-xl">
                    <Input 
                      {...field} 
                      variant="bordered"
                      label="Email"
                      labelPlacement="outside"
                      placeholder="example@gmail.com"
                      isInvalid={errors.email !== undefined}
                      errorMessage={errors.email?.message}
                      isDisabled
                    />
                  </Skeleton>
                )} />

                <Controller control={control} name="tpsId" render={({field}) => (
                  <Skeleton isLoaded={!!dataPetugas?.data?.tpsId} className="rounded-xl">
                    <Select
                      {...field}
                      variant="bordered"
                      label="TPS"
                      labelPlacement="outside"
                      placeholder="Alamat TPS"
                      isInvalid={errors.tpsId !== undefined}
                      errorMessage={errors.tpsId?.message}
                      selectedKeys={field.value ? [field?.value] : []}
                    >
                      {dataTpsInputUpdate?.data?.map((tps: ITps) => (
                        <SelectItem key={tps.id}>
                          {tps.name}
                        </SelectItem>
                      ))}
                    </Select>
                  </Skeleton>
                )} />

              </CardBody>

              <CardFooter>
                <ButtonSolid type="submit" isDisabled={isPendingUpdatePetugas || isLoadingPetugas || isRefetchingPetugas}>
                  {isPendingUpdatePetugas ? <Spinner size="sm" color="default" /> : "Ubah"}
                </ButtonSolid>
              </CardFooter>
            </form>
          </Card>
        </div>
      )
    )
}

export default DetailPetugas;