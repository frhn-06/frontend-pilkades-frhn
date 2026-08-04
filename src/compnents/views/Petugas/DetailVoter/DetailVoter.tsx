import { BreadcrumbItem, Breadcrumbs, Card, CardBody, CardFooter, CardHeader, Input, Skeleton, Spinner } from "@heroui/react"
import useDetailVoter from "./useDetailVoter";
import { Controller } from "react-hook-form";
import { useEffect } from "react";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";


const DetailVoter = () => {
    const {
        dataVoter,
        isLoadingVoter,
        isRefetchingVoter,
        refetchVoter,
        isErrorVoter,
        reset,

        handleSubmitUpdateVoter,
        control,
        errors,

        onUpdateVoter,
        isPendingUpdateVoter,
        isSuccessUpdateVoter
    } = useDetailVoter();

    useEffect(() => {
      if(dataVoter) {
        reset({
          name: `${dataVoter?.data?.name}`,
          ...(dataVoter?.data?.info && {info : `${dataVoter?.data?.info}`}),
          ...(dataVoter?.data?.nik && {nik : `${dataVoter?.data?.info}`}) 
        })
      }
    },[dataVoter])

    useEffect(() => {
      if(isSuccessUpdateVoter) {
        refetchVoter();
      }
    },[isSuccessUpdateVoter])



    return (
      isErrorVoter ? (
        <div className="flex flex-col justify-center items-center">
          <p className="mt-12">
            not found
          </p>
        </div>
      ) : (
        <div>
          <div className="bg-white w-fit rounded-xl">
            <Breadcrumbs className="mb-6" variant="bordered">
              <BreadcrumbItem href="/petugas/voter">Pemilih</BreadcrumbItem>
              <BreadcrumbItem className="font-semibold" color="danger">Edit Pemilih</BreadcrumbItem>
            </Breadcrumbs>
          </div>


          <Card className="max-w-140 z-0">
            <form onSubmit={handleSubmitUpdateVoter(onUpdateVoter)}>
              <CardHeader>
                Pemilih
              </CardHeader>

              <CardBody className="gap-4">
                {errors.root !== undefined && (
                  <p className="text-sm text-danger">
                    {errors.root.message}
                  </p>
                )} 

                <Controller control={control} name="name" render={({field}) => (
                  <Skeleton isLoaded={!!dataVoter?.data?.name} className="rounded-xl">
                    <Input
                      {...field} 
                      variant="bordered"
                      label="Nama"
                      labelPlacement="outside"
                      placeholder="Nama pencoblos"
                      isInvalid={errors.name !== undefined}
                      errorMessage={errors.name?.message}
                      endContent={(
                        <p className="text-danger">
                          *
                        </p>
                      )}
                    />
                  </Skeleton>
                )} />

                <Controller control={control} name="nik" render={({field}) => (
                  <Skeleton isLoaded={!!dataVoter?.data?.nik || dataVoter?.data?.nik === null} className="rounded-xl">
                    <Input 
                      {...field} 
                      variant="bordered"
                      label="NIK"
                      labelPlacement="outside"
                      placeholder="Nomor induk kewarganegaraan"
                      isInvalid={errors.nik !== undefined}
                      errorMessage={errors.nik?.message}
                    />
                  </Skeleton>
                )} />

                <Controller control={control} name="info" render={({field}) => (
                  <Skeleton isLoaded={!!dataVoter?.data?.info || dataVoter?.data?.info === null} className="rounded-xl">
                    <Input 
                      {...field} 
                      variant="bordered"
                      label="Info"
                      labelPlacement="outside"
                      placeholder="Informasi alamat / asal pencoblos"
                      isInvalid={errors.info !== undefined}
                      errorMessage={errors.info?.message}
                    />
                  </Skeleton>
                )} />

                

              </CardBody>

              <CardFooter>
                <ButtonSolid type="submit" isDisabled={isPendingUpdateVoter || isLoadingVoter || isRefetchingVoter}>
                  {isPendingUpdateVoter ? <Spinner size="sm" color="default" /> : "Ubah"}
                </ButtonSolid>
              </CardFooter>
            </form>
          </Card>
        </div>
      )
    )
}

export default DetailVoter;