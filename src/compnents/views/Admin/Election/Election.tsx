import { IElection, IStatusElection } from "@/types/election";
import {  Card, CardBody, CardHeader, Input, Select, SelectItem, Spinner, Textarea } from "@heroui/react";
import useElection from "./useElection";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
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
import { signOut } from "next-auth/react";
import { LIST_STATUS_ELECTION } from "@/utils/constanta";
import useUpdateStatus from "./useUpdateStatus";


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
    } = useUpdateElection(setError)

    const {
      isPendingAddOneImage,
      
      isPendingUpdateLogo,
      isSuccessUpdateLogo,

      handleChangeImg
    } = useUpdateLogo();

    const {
        isPendingUpdateStatusElection,
        isSuccessUpdateStatusElection,
        onUpdateStatusElection
    } = useUpdateStatus();



    useEffect(() => {
      if(isSuccessUpdateElection || isSuccessUpdateStatusElection) {
        refetch();
      }
    },[isSuccessUpdateElection, isSuccessUpdateStatusElection])

    useEffect(() => {
      if(isSuccessAddElection) {
        signOut();
      }
    },[isSuccessAddElection])


    useEffect(() => {
      if(Object.keys(data).length < 1) {
        reset();
        return;
      } else {
        setValue("name", `${data.name}`);
        setValue("organizerName", `${data.organizerName}`);
        setValue("organizerInfo", `${data.organizerInfo}`);
        setValue("description", `${data.description !== null ? data.description : ""}`)
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
          <h1 className="font-bold text-2xl text-utama">
            Kelola informasi Voting Pemilihan
          </h1>

          {Object.keys(data).length < 1 && (
            <div className="p-4 mb-6">
              <h1 className="text-utama font-bold text-xl">
                Selamat Datang
              </h1>
              <p className="text-utama">
                Election adalah data utama dalam aplikasi ini.
              </p>
              <p className="text-utama">
                Setelah Election dibuat, Anda dapat:
              </p>
              <ul className="text-utama">
                <li className="list-disc list-inside">
                  Menambahkan TPS
                </li>
                <li className="list-disc list-inside">
                  Menambahkan Petugas
                </li>
                <li className="list-disc list-inside">
                  Menambahkan Kandidat
                </li>
                <li className="list-disc list-inside">
                  Menambahkan Daftar Pemilih
                </li>
                <li className="list-disc list-inside">
                  Melihat Dashboard
                </li>
                <li className="list-disc list-inside">
                  Monitoring Pemungutan Suara
                </li>
              </ul>
              <p className="text-utama">
                Silakan lengkapi formulir di bawah ini untuk memulai.
              </p>
            </div>
          )}

          <div className="mt-6">
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
                          placeholder="Contoh: Pemilihan Kepala Desa Sukamaju 2026"
                          labelPlacement="outside"
                          isInvalid={errors.name !== undefined}
                          errorMessage={errors?.name?.message}
                          isDisabled={isDisabled}
                        />
                      )} />
                      <Controller control={control} name="organizerName" render={({field}) => (
                        <Input 
                          {...field}
                          className="z-0"
                          variant="bordered"
                          fullWidth
                          label="Nama Penyelenggara"
                          placeholder="Contoh: SMA Negeri 1 Semarang, Universitas ABC, atau Desa Sukamaju"
                          labelPlacement="outside"
                          isInvalid={errors.organizerName !== undefined}
                          errorMessage={errors?.organizerName?.message}
                          isDisabled={isDisabled}
                        />
                      )} />
                      <Controller control={control} name="organizerInfo" render={({field}) => (
                        <Input 
                          {...field}
                          className="z-0"
                          variant="bordered"
                          fullWidth
                          label="Informasi penyelenggara"
                          placeholder="Contoh: alamat, fakultas, kecamatan, atau informasi lainnya"
                          labelPlacement="outside"
                          isInvalid={errors.organizerInfo !== undefined}
                          errorMessage={errors?.organizerInfo?.message}
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
                          placeholder="Jelaskan secara singkat tentang pemilihan ini"
                          labelPlacement="outside"
                          isInvalid={errors.description !== undefined}
                          errorMessage={errors?.description?.message}
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
                          placeholder="01/01/2026 00:00:00"
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
                          placeholder="01/01/2026 00:00:00"
                        />
                      )} />


                      <ButtonFlat type="button" onPress={() => setDisabled(!isDisabled)}                      >
                        {Object.keys(data).length < 1 ? "Buat data" : "Ubah data"}
                      </ButtonFlat>
                      
                      <ButtonSolid type="submit" isDisabled={isDisabled || isPendingAddElection || isPendingUpdateElection} >
                        {isPendingAddElection || isPendingUpdateElection ? <Spinner size="sm" color="default" /> : "Simpan"}
                      </ButtonSolid>

                      <div className="flex gap-4">
                        {data.logo !== null && Object.keys(data).length > 0 ? (
                          <div className="w-72 rounded-xl overflow-hidden relative">
                            <Image 
                              src={`${data.logo}` || ""} 
                              alt="logo" 
                              width={720} 
                              height={480} 
                              className="w-full" 
                            />

                            <div className={cn("absolute top-0 w-full bottom-0 bg-white/50", {"hidden" : !isDisabled})} />
                          </div>
                        ):(
                          <div className="w-72 h-24 rounded-xl border-2 border-gray-300 flex items-center justify-center">
                            <p className="text-second2 italic">
                              Belum ada logo
                            </p>
                          </div>
                        )}
                          
                        <label htmlFor="input-logo" className="h-fit">
                          <div className={cn("py-1 px-2 rounded-lg bg-inti text-white text-sm", {"bg-gray-300": isDisabled})}>
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

                    
                      <Select
                        variant="bordered"
                        label="Status Election"
                        labelPlacement="outside"
                        placeholder="Pilih Status Election"
                        className="bg-red-100 rounded-2xl border-red-500 border-2"
                        selectedKeys={data.status ? [`${data.status}`] : []}
                        isDisabled={isDisabled}
                        onChange={(e) => onUpdateStatusElection({
                          status: `${e.target.value}`
                        } as IStatusElection)}
                      >
                        {LIST_STATUS_ELECTION?.map((status) => (
                          <SelectItem key={status.id}>
                            {isPendingUpdateStatusElection ? "mengupdate...." : status.label}
                          </SelectItem>
                        ))}
                      </Select>
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