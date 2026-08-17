import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@heroui/react"
import { useEffect } from "react";
import usePresent from "./useNoPresent";
import { IVoter } from "@/types/voter";

interface TypeProps {
  onClose: () => void;
  isOpen: boolean;
  data: IVoter;
  refetch: () => void;
}
const NoPresent = (props: TypeProps) => {
    const {
      onClose,
      isOpen,
      data,
      refetch
    } = props;

    const {
        onNoPresent,
        isPendingNoPresent,
        isSuccessNoPresent,
        isErrorNoPresent
    } = usePresent(`${data?.id}`)


    useEffect(() => {
      if(isSuccessNoPresent) {
        refetch();
        onClose();
      }
    },[isSuccessNoPresent])

    useEffect(() => {
      if(isErrorNoPresent) {
        onClose();
      }
    },[isErrorNoPresent])

    return (
        <Modal isOpen={isOpen} onClose={onClose} placement="center">
          <ModalContent>
            <ModalHeader>
              Absensi Voter
            </ModalHeader>
            <ModalBody>
              Batal status hadir {data?.name} menjadi tidak hadir?
            </ModalBody>
            <ModalFooter>
              <ButtonFlat onPress={onClose}>
                Kembali
              </ButtonFlat>
              <ButtonSolid onPress={onNoPresent} isDisabled={isPendingNoPresent}>
                {isPendingNoPresent ? <Spinner color="default" size="sm" /> : "Iya"}
              </ButtonSolid>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
}

export default NoPresent;