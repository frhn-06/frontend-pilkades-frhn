import { BreadcrumbItem, Breadcrumbs, Card, CardBody, CardFooter, CardHeader, Input, Skeleton, Spinner, Textarea } from "@heroui/react";
import useDetailCandidate from "./useDetailCandidate";
import { Controller } from "react-hook-form";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { useEffect } from "react";
import cn from "@/utils/cn";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import Image from 'next/image'
import InputFile from "@/compnents/ui/InputFile";

const DetailCandidate = () => {
    const {
        isPendingAddOneImage,
        isSuccessAddOneImage,
        handleChangeImg,

        isPendingRemoveOneImage,
        isSuccessRemoveOneImage,
        handleRemoveImg,

        dataCandidate,
        isLoadingCandidate,
        refetchCandidate,
        isRefetchingCandidate,
        isErrorCandidate,

        handleSubmitUpdateCandidate,
        control,
        errors,
        reset,

        fotoLoad,

        fields,
        append,
        remove,
        
        isPendingUpdateCandidate,
        isSuccessUpdateCandidate,

        onUpdateCandidate
    } = useDetailCandidate();

    useEffect(() => {
      if(dataCandidate) {
        reset({
          ...dataCandidate.data,
          nomor: `${dataCandidate.data.nomor}`,
          oldImg: `${dataCandidate.data.img}`,
          img: null
        })
      }
    }, [dataCandidate])


    useEffect(() => {
      if(isSuccessUpdateCandidate) {
        refetchCandidate();
      }
    }, [isSuccessUpdateCandidate])


    const onPlusMember = () => {
      append({
        name:"",
        position: fields.length === 0 ? "ketua" : fields.length === 1 ? "wakil" : "",
        order: fields.length + 1,
      })
    }

    const onMinMember = (index: number) => {
      if(index > 0) {
        remove(index);
      }
    }  
  

    return (
      isErrorCandidate ? (
        <div>
          not found
        </div>
      ) : (
        <div>
          <div className="bg-white w-fit rounded-xl">
            <Breadcrumbs className="mb-6" variant="bordered">
              <BreadcrumbItem href="/admin/candidate">Kandidat</BreadcrumbItem>
              <BreadcrumbItem className="font-semibold" color="danger">Edit Kandidat</BreadcrumbItem>
            </Breadcrumbs>
          </div>
          
          <Card className="max-w-140 z-0">
            <form onSubmit={handleSubmitUpdateCandidate(onUpdateCandidate)}>
              <CardHeader>
                Kandidat Calon
              </CardHeader>
        
              <CardBody className="gap-4">
                {errors.root !== undefined && (
                  <p className="text-sm text-danger">
                    {errors.root.message}
                  </p>
                )} 
        
                <Controller control={control} name="nomor" render={({field}) => (
                  <Skeleton isLoaded={!!dataCandidate?.data?.nomor} className="rounded-xl">
                    <Input
                      {...field} 
                      variant="bordered"
                      label="Nomor"
                      labelPlacement="outside"
                      placeholder="Nomor urut"
                      isInvalid={errors.nomor !== undefined}
                      errorMessage={errors.nomor?.message}
                    />
                  </Skeleton>
                )} />
        
                <Controller control={control} name="vision" render={({field}) => (
                  <Skeleton isLoaded={!!dataCandidate?.data?.vision} className="rounded-xl">
                    <Textarea 
                      {...field} 
                      variant="bordered"
                      label="Visi"
                      labelPlacement="outside"
                      placeholder="Visi"
                      isInvalid={errors.vision !== undefined}
                      errorMessage={errors.vision?.message}
                    />
                  </Skeleton>
                )} />

                <Controller control={control} name="mission" render={({field}) => (
                  <Skeleton isLoaded={!!dataCandidate?.data?.mission} className="rounded-xl">
                    <Textarea 
                      {...field} 
                      variant="bordered"
                      label="Misi"
                      labelPlacement="outside"
                      placeholder="Misi"
                      isInvalid={errors.mission !== undefined}
                      errorMessage={errors.mission?.message}
                    />
                  </Skeleton>
                )} />

                <div className="w-40">
                  {dataCandidate?.data?.img ? (
                    <Image 
                      src={dataCandidate.data.img} 
                      alt="foto-kandidat" 
                      width={240} 
                      height={480} 
                      className="w-full rounded-xl" 
                    />
                  ) : (
                    <Skeleton isLoaded={!!dataCandidate?.data?.img} className="w-full h-60 rounded-xl" />
                  )}
                </div>
                
                <Controller control={control} name="oldImg" render={({field}) => (
                  <input {...field} type="hidden" />
                )} />

                <Controller control={control} name="img" render={({field}) => (
                  <InputFile 
                    {...field}
                    onChangeImg={handleChangeImg}
                    isPendingAdd={isPendingAddOneImage}
                    isSuccessAdd={isSuccessAddOneImage}

                    onRemoveImg={handleRemoveImg}
                    isPendingRemove={isPendingRemoveOneImage}
                    isSuccessRemove={isSuccessRemoveOneImage}

                    fotoOnLoad={typeof fotoLoad === "string" ? fotoLoad : ""}

                    label="Foto Baru"
                    isInvalid={errors.img !== undefined}
                    errorMessage={errors.img?.message}
                  />
                )} />





                <div className={cn("border-2 border-gray-400/30 rounded-xl p-4 flex flex-col gap-4 mt-4", {
                  "border-danger" : errors.members !== undefined
                  })}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold">
                      Kandidat Calon
                    </p>
                  
                    <div className="flex gap-2 items-center">
                      <FaPlusCircle 
                        className="w-5 h-5 text-gray-700 cursor-pointer" 
                        onClick={onPlusMember} 
                      />
                    </div>
                  </div>

                  {errors.members !== undefined && (
                    <p>
                      {errors.members.message}
                      error
                    </p>
                  )}


                  {fields.map((item, i) => (
                    <div key={item.id} className="flex flex-col gap-4 border-b-2 border-b-gray-300 pb-4 border-dashed relative">
                      <Controller control={control} name={`members.${i}.name`} render={({field}) => (
                        <Input 
                          {...field}
                          variant="bordered"
                          label="Nama"
                          labelPlacement="outside"
                          placeholder="Nama Calon"
                          isInvalid={errors.members?.[i]?.name !== undefined}
                          errorMessage={errors.members?.[i]?.name?.message}
                          endContent={(
                            <span className="text-danger">
                              *
                            </span>
                          )}
                        />
                      )} />
                  
                      <Controller control={control} name={`members.${i}.position`} render={({field}) => (
                        <Input 
                          {...field}
                          variant="bordered"
                          label="Posisi"
                          labelPlacement="outside"
                          placeholder="Posisi jabatan lain"
                          isInvalid={errors.members?.[i]?.position !== undefined}
                          errorMessage={errors.members?.[i]?.position?.message}
                          isDisabled={i === 0 || i === 1}
                          endContent={(
                            <span className="text-danger">
                              *
                            </span>
                          )}
                        />
                      )} />
                  
                      <FaMinusCircle 
                        className={cn("w-5 h-5 text-gray-700 cursor-pointer top-2 right-2", {"text-second2" : i === 0})} 
                        onClick={() => onMinMember(i)} 
                      />
                    </div>
                  ))}
                </div>
        
              </CardBody>
        
              <CardFooter>
                <ButtonSolid 
                  type="submit" 
                  isDisabled={isPendingUpdateCandidate || isLoadingCandidate || isRefetchingCandidate}
                >
                  {isPendingUpdateCandidate ? <Spinner size="sm" color="default" /> : "Ubah"}
                </ButtonSolid>
              </CardFooter>
            </form>
          </Card>
        </div>
      )
    )
}

export default DetailCandidate;