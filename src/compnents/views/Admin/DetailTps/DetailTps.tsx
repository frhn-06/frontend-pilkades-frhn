import { BreadcrumbItem, Breadcrumbs, Button, Card, CardBody, CardFooter, CardHeader, Input, Skeleton, Spinner } from "@heroui/react";
import useDetailTps from "./useDetailTps";
import { Controller } from "react-hook-form";
import { useEffect } from "react";



const DetailTps = () => {

    const {
        dataTps,
        isLoadingTps,
        refetchTps,
        isRefetchingTps,

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
        setValue("alamat", dataTps?.data?.alamat);
        setValue("rt", `${dataTps?.data?.rt}`);
        setValue("rw", `${dataTps?.data?.rw}`);
      }
    },[dataTps?.data])

    useEffect(() => {
      if(isSuccessUpdateTps) {
        refetchTps();
      }
    },[isSuccessUpdateTps])

    return (
        <div>
          <Breadcrumbs className="mb-6">
            <BreadcrumbItem href="/admin/tps">TPS</BreadcrumbItem>
            <BreadcrumbItem className="text-red-800 font-semibold">Detail TPS</BreadcrumbItem>
          </Breadcrumbs>

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

                <Controller control={control} name="alamat" render={({field}) => (
                  <Skeleton className="rounded-2xl" isLoaded={!!dataTps?.data?.alamat}>
                    <Input 
                    {...field}
                    variant="bordered" 
                    label="Alamat" 
                    labelPlacement="outside" 
                    placeholder="Blok / Komplek" 
                    isInvalid={!!errors.alamat}
                    errorMessage={errors?.alamat?.message}
                    />
                  </Skeleton>
                )}/>

                <Controller control={control} name="rt" render={({field}) => (
                  <Skeleton className="rounded-2xl" isLoaded={!!dataTps?.data?.rt}>
                    <Input 
                    {...field}
                    variant="bordered" 
                    label="Rt" 
                    labelPlacement="outside" 
                    placeholder="Rt" 
                    isInvalid={!!errors.rt}
                    errorMessage={errors?.rt?.message}
                    />
                  </Skeleton>
                )}/>

                <Controller control={control} name="rw" render={({field}) => (
                  <Skeleton className="rounded-2xl" isLoaded={!!dataTps?.data?.rw}>
                    <Input 
                    {...field}
                    variant="bordered" 
                    label="Rw" 
                    labelPlacement="outside" 
                    placeholder="Rw" 
                    isInvalid={!!errors.rw}
                    errorMessage={errors?.alamat?.message}
                    />
                  </Skeleton>
                )}/>
              </CardBody>

              <CardFooter>
                <Button type="submit" className="bg-red-800 text-white" isDisabled={isLoadingTps || isPendingUpdateTps || isRefetchingTps}>
                  {isPendingUpdateTps ? <Spinner color="default" size="sm" /> : "Simpan"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
    )
}


export default DetailTps;