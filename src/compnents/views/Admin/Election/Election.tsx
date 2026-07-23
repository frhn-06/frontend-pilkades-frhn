import { IElection } from "@/types/election";
import { Alert, Button, Card, CardBody, CardHeader, Input, Radio, RadioGroup, Spinner, Textarea } from "@heroui/react";
import useElection from "./useElection";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import listStatusEnum from "./listStatusEnum";
import "react-datepicker/dist/react-datepicker.css";
import convert from "@/utils/convert";
import InputDateTime from "@/compnents/ui/InputDateTime";
import cn from "@/utils/cn";
import useAddElection from "./useAddelection";
import useUpdateElection from "./useUpdateElection";
import Image from 'next/image'
import useUpdateLogo from "./useUpdateLogo";
import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";

interface TypeProps {
  isRefetching: boolean;
  data: IElection;
  refetch : () => void
}
const Election = (props: TypeProps) => {
    const {
      isRefetching,
      data,
      refetch
    } = props;

    const {
        handleSubmitElection,
        errors,
        setValue,
        setError,
        control,
        reset,

    } = useElection();

    const {
        isPendingAddElection,
        isSuccessAddElection,
        onAddElection
    } = useAddElection(setError)

    const {
        isPendingUpdateElection,
        isSuccessUpdateElection,
        onUpdateElection
    } = useUpdateElection(Number(data.id), setError)

    const {
      isPendingAddOneImage,
      
      isPendingUpdateLogo,
      isSuccessUpdateLogo,

      handleChangeImg
    } = useUpdateLogo(Number(data.id))

    useEffect(() => {
      if(isSuccessAddElection || isSuccessUpdateElection) {
        refetch();
      }
    },[isSuccessAddElection, isSuccessUpdateElection])


    useEffect(() => {
      if(Object.keys(data).length < 1) {
        reset();
        return;
      } else {
        setValue("name", `${data.name}`)
        setValue("desa", `${data.desa}`)
        setValue("kecamatan", `${data.kecamatan}`)
        setValue("kabupatenKota", `${data.kabupatenKota}`)
        setValue("provinsi", `${data.provinsi}`)
        setValue("description", `${data.description}`)
        setValue("provinsi", `${data.provinsi}`)
        setValue("description", `${data.description !== null ? data.description : ""}`)
        setValue("status", `${data.status}`)
        setValue("startAt", convert.dateToFrontend(`${data.startAt}`));
        setValue("endAt", convert.dateToFrontend(`${data.endAt}`));
      }
    },[data])

  

    useEffect(() => {
      if(isSuccessUpdateLogo) {
        refetch();
      }
    },[isSuccessUpdateLogo])
    
    const [isDisabled, setDisabled] = useState(true);


    return (
        <div className="">
          <h1 className="font-bold text-2xl text-utama mb-6">
            Kelola informasi Pilkades
          </h1>

          {Object.keys(data).length < 1 && (
            <Alert className="mb-4" color="warning" variant="faded">
              Data eleksi pilkades belum dibuat. silakan anda buat terlebih dahulu!
            </Alert>
          )}

          <div>
            {isRefetching ? (
              <div className="relative bg-white rounded-2xl">
                <div className="absolute top-0 w-full min-h-120 bg-black/30 backdrop-blur-lg rounded-2xl flex justify-center items-center">
                  <Spinner color="danger" />
                </div>
              </div>
            ) : (
              <Card>
                <form encType="multipart/form-data" onSubmit={
                  Object.keys(data).length < 1 ?
                  handleSubmitElection(onAddElection) :
                  handleSubmitElection(onUpdateElection)
                }>
                  <CardHeader>
                    <h1 className="font-semibold text-xl text-utama">
                      {data?.name}
                    </h1>
                  </CardHeader>
                  
                  <CardBody className="md:flex-row gap-4">
                    <div className="flex flex-col gap-4 flex-1">
                      <Controller control={control} name="name" render={({field}) => (
                        <Input 
                          {...field}
                          className="z-0"
                          variant="bordered"
                          fullWidth
                          label="Nama"
                          placeholder="Nama Pilkades"
                          labelPlacement="outside"
                          isInvalid={errors.name !== undefined}
                          errorMessage={errors?.name?.message}
                          isDisabled={isDisabled}
                        />
                      )} />
                      <Controller control={control} name="desa" render={({field}) => (
                        <Input 
                          {...field}
                          className="z-0"
                          variant="bordered"
                          fullWidth
                          label="Desa"
                          placeholder="Desa"
                          labelPlacement="outside"
                          isInvalid={errors.desa !== undefined}
                          errorMessage={errors?.desa?.message}
                          isDisabled={isDisabled}
                        />
                      )} />
                      <Controller control={control} name="kecamatan" render={({field}) => (
                        <Input 
                          {...field}
                          className="z-0"
                          variant="bordered"
                          fullWidth
                          label="Kecamatan"
                          placeholder="Kecamatan"
                          labelPlacement="outside"
                          isInvalid={errors.kecamatan !== undefined}
                          errorMessage={errors?.kecamatan?.message}
                          isDisabled={isDisabled}
                        />
                      )} />
                      <Controller control={control} name="kabupatenKota" render={({field}) => (
                        <Input 
                          {...field}
                          className="z-0"
                          variant="bordered"
                          fullWidth
                          label="Kabupaten / Kota"
                          placeholder="Kabupaten / Kota"
                          labelPlacement="outside"
                          isInvalid={errors.kabupatenKota !== undefined}
                          errorMessage={errors?.kabupatenKota?.message}
                          isDisabled={isDisabled}
                        />
                      )} />
                      <Controller control={control} name="provinsi" render={({field}) => (
                        <Input 
                          {...field}
                          className="z-0"
                          variant="bordered"
                          fullWidth
                          label="Provinsi"
                          placeholder="Provinsi"
                          labelPlacement="outside"
                          isInvalid={errors.provinsi !== undefined}
                          errorMessage={errors?.provinsi?.message}
                          isDisabled={isDisabled}
                        />
                      )} />
                      <Controller control={control} name="description" render={({field}) => (
                        <Textarea 
                          {...field}
                          className="z-0"
                          variant="bordered"
                          fullWidth
                          label="Deskripsi"
                          placeholder="Deskripsi"
                          labelPlacement="outside"
                          isInvalid={errors.provinsi !== undefined}
                          errorMessage={errors?.provinsi?.message}
                          isDisabled={isDisabled}
                        />
                      )} />
                    </div>

                    <div className="flex flex-col gap-4 flex-1">

                      <Controller control={control} name="startAt" render={({field}) => (
                        <InputDateTime 
                          field={{
                            value: field.value, 
                            onChange: field.onChange
                          }}
                          label="Start"
                          isInvalid={errors.startAt !== undefined}
                          errorMessage={`${errors?.startAt?.message}`}
                          isDisabled={isDisabled}
                          placeholder="Pilih waktu awal"
                        />
                      )} />

                      <Controller control={control} name="endAt" render={({field}) => (
                        <InputDateTime 
                          field={{
                            value: field.value, 
                            onChange: field.onChange
                          }}
                          label="End"
                          isInvalid={errors.endAt !== undefined}
                          errorMessage={`${errors?.endAt?.message}`}
                          isDisabled={isDisabled}
                          placeholder="Pilih waktu akhir"
                        />
                      )} />
                        
                      <Controller control={control} name="status" render={({field}) => (
                        <RadioGroup 
                          {...field}
                          className="z-0"
                          label={(
                            <p className={cn("text-utama text-sm", {"text-gray-400" : isDisabled})}>Status</p>)
                          }
                          value={field.value}
                          isDisabled={isDisabled}
                          isInvalid={errors.status !== undefined}
                          errorMessage={`${errors.status?.message}`}
                        >
                          {listStatusEnum.map((status) => (
                            <Radio 
                              key={status.id} 
                              value={status.id}
                              size="sm"
                            >
                              {status.label}
                            </Radio>
                          ))}
                        </RadioGroup>
                      )} />

                      <ButtonFlat type="button" onPress={() => setDisabled(!isDisabled)}                      >
                        {Object.keys(data).length < 1 ? "Buat data" : "Ubah data"}
                      </ButtonFlat>
                      
                      <ButtonSolid type="submit" isDisabled={isDisabled || isPendingAddElection || isPendingUpdateElection} >
                        {isPendingAddElection || isPendingUpdateElection ? <Spinner size="sm" color="default" /> : "Simpan"}
                      </ButtonSolid>

                      <div className="flex gap-4">
                        {data.logo !== null ? (
                          <div className="w-72 rounded-xl overflow-hidden relative">
                            <Image 
                              src={`${data.logo}`} 
                              alt="logo" 
                              width={720} 
                              height={480} 
                              className="w-full" 
                            />

                            <div className={cn("absolute top-0 w-full bottom-0 bg-white/50", {"hidden" : !isDisabled})} />
                          </div>
                        ):(
                          <div className="w-72 h-24 rounded-xl border-2 border-gray-300 flex items-center justify-center">
                            <p className="text-gray-400 italic">
                              Belum ada logo
                            </p>
                          </div>
                        )}
                          
                        <label htmlFor="input-logo">
                          <div className={cn("py-1 px-2 rounded-lg bg-red-700 text-white text-sm", {"bg-gray-300": isDisabled})}>
                            {isPendingAddOneImage || isPendingUpdateLogo ? <Spinner size="sm" color="default" /> : data.logo !== undefined ? "Update logo" : "Add logo"}
                          </div>
                          <input 
                            type="file" 
                            id="input-logo" 
                            className="hidden" 
                            onChange={(e) => handleChangeImg(e, data.logo)} 
                            disabled={isPendingAddOneImage || isPendingUpdateElection || isDisabled} 
                          />
                        </label>
                      </div>
                    </div>

                  </CardBody>
                </form>
              </Card>
            )}            
          </div>
        </div>
    )
}

export default Election;