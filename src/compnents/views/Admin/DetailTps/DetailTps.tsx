import { BreadcrumbItem, Breadcrumbs, Card, CardBody, CardFooter, CardHeader, Input, Skeleton, Spinner } from "@heroui/react";
import useDetailTps from "./useDetailTps";
import { Controller } from "react-hook-form";
import { useEffect } from "react";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";



const DetailTps = () => {

    const {
        dataTps,
        isLoadingTps,
        refetchTps,
        isRefetchingTps,
        isErrorTps,

        handleSubmitTps,
        control,
        errors,
        setValue,

        isPendingUpdateTps,
        isSuccessUpdateTps,
        onUpdateTps
    } = useDetailTps();

    useEffect(() => {
      if(dataTps?.data) {
        setValue("name", dataTps?.data?.name);
        setValue("location", dataTps?.data?.location);
      }
    },[dataTps?.data])

    useEffect(() => {
      if(isSuccessUpdateTps) {
        refetchTps();
      }
    },[isSuccessUpdateTps])

    return (
        isErrorTps ? (
          <div className="flex flex-col justify-center items-center">
            <p className="mt-12">
              not found
            </p>
          </div>
        ) : (
          <div>
            <div className="bg-white w-fit rounded-xl">
              <Breadcrumbs className="mb-6" variant="bordered">
                <BreadcrumbItem href="/admin/tps">TPS</BreadcrumbItem>
                <BreadcrumbItem className="font-semibold" color="danger">Edit TPS</BreadcrumbItem>
              </Breadcrumbs>
            </div>

            <Skeleton isLoaded={!!dataTps?.data?.name} className="mb-6 max-w-xl rounded-lg">
              <h1 className="font-bold text-xl text-red-800 mb-6">
                {dataTps?.data?.name}
              </h1>  
            </Skeleton>
          
            <Card className="max-w-3xl z-0">
              <form onSubmit={handleSubmitTps(onUpdateTps)}>
                <CardHeader>
                  Detail TPS
                </CardHeader>

                <CardBody className="gap-4">
                  {errors?.root && (
                    <p className="text-danger text-sm">
                      {errors.root.message}
                    </p>
                  )}
                  
                  <Controller control={control} name="name" render={({field}) => (
                    <Skeleton className="rounded-2xl" isLoaded={!!dataTps?.data?.name}>
                      <Input 
                      {...field}
                      variant="bordered" 
                      label="Nama TPS" 
                      labelPlacement="outside" 
                      placeholder="TPS 01" 
                      isInvalid={!!errors.name}
                      errorMessage={errors?.name?.message}
                      />
                    </Skeleton>
                  )}/>

                  <Controller control={control} name="location" render={({field}) => (
                    <Skeleton className="rounded-2xl" isLoaded={!!dataTps?.data?.location}>
                      <Input 
                      {...field}
                      variant="bordered" 
                      label="Lokasi / Keterangan Tempat" 
                      labelPlacement="outside" 
                      placeholder="Contoh: Rt Rw, Aula, ruang kelas, gedung, atau balai desa" 
                      isInvalid={!!errors.location}
                      errorMessage={errors?.location?.message}
                      />
                    </Skeleton>
                  )}/>


                </CardBody>

                <CardFooter>
                  <ButtonSolid type="submit" isDisabled={isLoadingTps || isPendingUpdateTps || isRefetchingTps}>
                    {isPendingUpdateTps ? <Spinner color="default" size="sm" /> : "Simpan"}
                  </ButtonSolid>
                </CardFooter>
              </form>
            </Card>
          </div>
        )
    )
}


export default DetailTps;