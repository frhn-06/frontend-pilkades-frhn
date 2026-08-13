import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, Spinner } from "@heroui/react"
import useAddVoter from "./useAddVoter"
import { Controller } from "react-hook-form";
import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { useEffect } from "react";

interface TypeProps {
  isOpen: boolean;
  onClose: () => void;
  refetch: () => void;
}
const AddVoter = (props: TypeProps) => {
    const {
      isOpen,
      onClose,
      refetch
    } = props;

    const {
        handleSubmitVoter,
        control,
        errors,
        reset,

        onAddVoter,

        isPendingAddVoter,
        isSuccessAddVoter,

    } = useAddVoter();

    const handleClose = () => {
      onClose();
      reset();
    }

    useEffect(() => {
      if(isSuccessAddVoter) {
        refetch();
        onClose();
      }
    },[isSuccessAddVoter])

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
          <ModalContent>
            <form onSubmit={handleSubmitVoter(onAddVoter)}>
              <ModalHeader>
                Buat data pencoblos
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
                    placeholder="Masukkan nama lengkap pemilih"
                    isInvalid={errors.name !== undefined}
                    errorMessage={errors.name?.message}
                    endContent={(
                      <p className="text-danger"> 
                        *
                      </p>
                    )}
                  />
                )} />

                <Controller control={control} name="nik" render={({field}) => (
                  <Input 
                    {...field}
                    variant="bordered"
                    label="Nomor Identitas"
                    labelPlacement="outside"
                    placeholder="Masukkan NIK atau nomor identitas pemilih"
                    isInvalid={errors.nik !== undefined}
                    errorMessage={errors.nik?.message}
                  />
                )} />

                <Controller control={control} name="info" render={({field}) => (
                  <Input 
                    {...field}
                    variant="bordered"
                    label="Informasi Tambahan"
                    labelPlacement="outside"
                    placeholder="Contoh: Kelas 12 A, RT 03/RW 02, Fakultas Teknik, atau informasi lainnya"
                    isInvalid={errors.info !== undefined}
                    errorMessage={errors.info?.message}
                  />
                )} />

              </ModalBody>

              <ModalFooter>
                <ButtonFlat onPress={handleClose} isDisabled={isPendingAddVoter}>
                  Kembali
                </ButtonFlat>
                <ButtonSolid type="submit" isDisabled={isPendingAddVoter}>
                  {isPendingAddVoter ? <Spinner size="sm" color="default" /> : "Simpan"}
                </ButtonSolid>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
    )
}

export default AddVoter;