import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@heroui/react";
import useAddTps from "./useAddTps"
import { Controller } from "react-hook-form";
import { useEffect } from "react";
import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";

interface TypeProps {
  isOpen: boolean;
  onClose: () => void;
  refetch: () => void;
}
const AddTps = (props:TypeProps) => {
    const {
      isOpen,
      onClose,
      refetch
    } = props;

    const {
        handleSubmitTps,
        control,
        errors,

        isPendingTps,
        isSuccessTps,
        onTps,
        reset
    } = useAddTps();

    const handleClose = () => {
      onClose();
      reset()
    }

    useEffect(() => {
      if(isSuccessTps) {
        reset();
        onClose();
        refetch();
      }
    },[isSuccessTps])

     return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmitTps(onTps)}>
          <ModalContent>
            <ModalHeader>
              Create TPS
            </ModalHeader>

            <ModalBody>
              {errors?.root && (
                <p className="text-danger text-sm">
                  {errors.root.message}
                </p>
              )}

              <Controller control={control} name="name" render={({field}) => (
                <Input 
                {...field}
                variant="bordered" 
								label="Nama TPS" 
								labelPlacement="outside" 
								placeholder="TPS 01" 
								isInvalid={!!errors.name}
								errorMessage={errors?.name?.message}
                />
              )}/>
              <Controller control={control} name="alamat" render={({field}) => (
                <Input 
                {...field}
                variant="bordered" 
								label="Alamat" 
								labelPlacement="outside" 
								placeholder="Blok / Komplek" 
								isInvalid={!!errors.alamat}
								errorMessage={errors?.alamat?.message}
                />
              )}/>
              <Controller control={control} name="rt" render={({field}) => (
                <Input 
                {...field}
                variant="bordered" 
								label="Rt" 
								labelPlacement="outside" 
								placeholder="Rt" 
								isInvalid={!!errors.rt}
								errorMessage={errors?.rt?.message}
                />
              )}/>
              <Controller control={control} name="rw" render={({field}) => (
                <Input 
                {...field}
                variant="bordered" 
								label="Rw" 
								labelPlacement="outside" 
								placeholder="Rw" 
								isInvalid={!!errors.rw}
								errorMessage={errors?.alamat?.message}
                />
              )}/>
            </ModalBody>

            <ModalFooter>
              <ButtonFlat onPress={handleClose} isDisabled={isPendingTps}>
                Kembali
              </ButtonFlat>
              <ButtonSolid type="submit" isDisabled={isPendingTps}>
                {isPendingTps ? <Spinner color="default" size="sm" /> : "Simpan" }
              </ButtonSolid>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
					
    )
}

export default AddTps;