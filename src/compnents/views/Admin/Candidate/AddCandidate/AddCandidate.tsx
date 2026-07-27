import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner, Textarea } from "@heroui/react"
import { Controller } from "react-hook-form";
import useAddCandidate from "./useAddCandidate";
import InputFile from "@/compnents/ui/InputFile";
import { useEffect, useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import cn from "@/utils/cn";
import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";


interface TypeProps {
  isOpen: boolean;
  onClose: () => void;
  refetch: () => void;
}
const AddCandidate = (props: TypeProps) => {
    const {
      isOpen,
      onClose,
      refetch
    } = props;

    const {
        isPendingAddOneImage,
        isSuccessAddOneImage,

        isPendingRemoveOneImage,
        isSuccessRemoveOneImage,

        handleSubmitCandidate,
        control,
        errors,
        reset,

        fotoLoad,

        fields,
        append,
        remove,

        handleChangeImg,
        handleRemoveImg,

        isPendingCandidate,
        isSuccessCandidate,

        onAddCandidate
    } = useAddCandidate();


    const onCloseModal = () => {
      onClose();
      reset();
    }

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

    useEffect(() => {
      if(isSuccessCandidate) {
        refetch();
        onClose();
      }
    },[isSuccessCandidate])



    return (
        <Modal isOpen={isOpen} onClose={onCloseModal} placement="center" scrollBehavior="inside">
          <form onSubmit={handleSubmitCandidate(onAddCandidate)}>
            <ModalContent>
              <ModalHeader>
                Buat Kandidat
              </ModalHeader>

              <ModalBody className="gap-4">
                {errors.root !== undefined && (
                  <p className="text-danger text-sm">
                    {errors.root.message}
                  </p>
                )}
                
                <Controller control={control} name="nomor" render={({field}) => (
                  <Input 
                    {...field}
                    variant="bordered"
                    label="Nomor"
                    labelPlacement="outside"
                    placeholder="nomor urut"
                    isInvalid={errors.nomor !== undefined}
                    errorMessage={errors.nomor?.message}
                    endContent={(
                      <span className="text-danger">
                        *
                      </span>
                    )}
                  />
                )} />

                <Controller control={control} name="vision" render={({field}) => (
                  <Textarea 
                    {...field}
                    variant="bordered"
                    label="Visi"
                    labelPlacement="outside"
                    placeholder="Visi"
                    isInvalid={errors.vision !== undefined}
                    errorMessage={errors.vision?.message}
                    endContent={(
                      <span className="text-danger">
                        *
                      </span>
                    )}
                  />
                )} />

                <Controller control={control} name="mission" render={({field}) => (
                  <Textarea 
                    {...field}
                    variant="bordered"
                    label="Misi"
                    labelPlacement="outside"
                    placeholder="Misi"
                    isInvalid={errors.mission !== undefined}
                    errorMessage={errors.mission?.message}
                    endContent={(
                      <span className="text-danger">
                        *
                      </span>
                    )}
                  />
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

                    label="Foto"
                    isInvalid={errors.img !== undefined}
                    errorMessage={errors.img?.message}
                  />
                )} />
                
                <div className={cn("border-2 border-gray-400/30 rounded-xl p-4 flex flex-col gap-4 mt-4", {
                  "border-danger" : errors.members !== undefined
                })}>
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
                        className={cn("w-5 h-5 text-gray-700 cursor-pointer top-2 right-2", {"text-gray-400" : i === 0})} 
                        onClick={() => onMinMember(i)} 
                      />
                    </div>
                  ))}
                </div>

              </ModalBody>

              <ModalFooter>
                <ButtonFlat 
                  isDisabled={isPendingAddOneImage || isPendingRemoveOneImage}
                  onPress={onCloseModal}
                >
                  Kembali
                </ButtonFlat>

                <ButtonSolid
                  type="submit"
                  isDisabled={isPendingCandidate || isPendingAddOneImage || isPendingRemoveOneImage}
                >
                  {isPendingCandidate ? <Spinner size="sm" color="default" /> : "Simpan"}
                </ButtonSolid>
              </ModalFooter>
            </ModalContent>
          </form>
        </Modal>
    )
}

export default AddCandidate;