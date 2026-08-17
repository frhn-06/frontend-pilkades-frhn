import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, Spinner } from "@heroui/react"
import useAddPetugas from "./useAddPetugas"
import { Controller } from "react-hook-form";
import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { ITps } from "@/types/tps";
import { useEffect } from "react";

interface TypeProps {
  isOpen: boolean;
  onClose: () => void;
  refetch: () => void;
}
const AddPetugas = (props: TypeProps) => {
    const {
      isOpen,
      onClose,
      refetch
    } = props;

    const {
        handleSubmitPetugas,
        control,
        errors,
        reset,

        onAddPetugas,

        isPendingAddPetugas,
        isSuccessAddPetugas,


        dataTpsInput,
        isLoadingTpsInput,

        hidePassword,
        handleHide
    } = useAddPetugas();

    const handleClose = () => {
      onClose();
      reset();
    }

    useEffect(() => {
      if(isSuccessAddPetugas) {
        refetch();
        onClose();
      }
    },[isSuccessAddPetugas])

    return (
        <Modal isOpen={isOpen} onClose={handleClose} placement="center">
          <ModalContent>
            <form onSubmit={handleSubmitPetugas(onAddPetugas)}>
              <ModalHeader>
                Buat Akun Petugas
              </ModalHeader>

              <ModalBody>
                {errors.root !== undefined && (
                  <p className="text-sm text-danger">
                    {errors.root?.message}
                  </p>
                )}
                
                <Controller control={control} name="name" render={({field}) => (
                  <Input 
                    {...field}
                    variant="bordered"
                    label="Nama"
                    labelPlacement="outside"
                    placeholder="Masukkan Nama Petugas"
                    isInvalid={errors.name !== undefined}
                    errorMessage={errors.name?.message}
                  />
                )} />
                <Controller control={control} name="email" render={({field}) => (
                  <Input 
                    {...field}
                    variant="bordered"
                    label="Email"
                    labelPlacement="outside"
                    placeholder="Masukkan Email Petugas"
                    isInvalid={errors.email !== undefined}
                    errorMessage={errors.email?.message}
                  />
                )} />
                <Controller control={control} name="tpsId" render={({field}) => (
                  <Select
                    {...field}
                    variant="bordered"
                    label="TPS"
                    labelPlacement="outside"
                    placeholder="Masukkan TPS Penempatan Tugas"
                    isInvalid={errors.tpsId !== undefined}
                    errorMessage={errors.tpsId?.message}
                  >
                    {dataTpsInput?.data?.map((tps: ITps) => (
                      <SelectItem key={tps.id}>
                        {tps.name}
                      </SelectItem>
                    ))}
                  </Select>
                )} />
                <Controller control={control} name="password" render={({field}) => (
                  <Input 
                    {...field}
                    type={hidePassword ? "password" : "text"}
                    variant="bordered"
                    label="Password"
                    labelPlacement="outside"
                    placeholder="Masukkan Password Akun Petugas"
                    isInvalid={errors.password !== undefined}
                    errorMessage={errors.password?.message}
                    endContent={(
                      <div className="h-full flex items-center justify-center cursor-pointer" onClick={handleHide}>
                        {hidePassword ? <IoEyeSharp /> : <FaEyeSlash />}
                      </div>
                    )}
                  />
                )} />
              </ModalBody>

              <ModalFooter>
                <ButtonFlat onPress={handleClose} isDisabled={isPendingAddPetugas || isLoadingTpsInput}>
                  Kembali
                </ButtonFlat>
                <ButtonSolid type="submit" isDisabled={isPendingAddPetugas || isLoadingTpsInput}>
                  {isPendingAddPetugas ? <Spinner size="sm" color="default" /> : "Simpan"}
                </ButtonSolid>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
    )
}

export default AddPetugas;