import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@heroui/react"
import { useEffect } from "react";
import usePresent from "./usePresent";
import { IVoter } from "@/types/voter";

interface TypeProps {
  onClose: () => void;
  isOpen: boolean;
  data: IVoter;
  refetch: () => void;
}
const Present = (props: TypeProps) => {
    const {
      onClose,
      isOpen,
      data,
      refetch
    } = props;

    const {
        onPresent,
        isPendingPresent,
        isSuccessPresent,
        isErrorPresent
    } = usePresent(`${data?.id}`)


    useEffect(() => {
      if(isSuccessPresent) {
        refetch();
        onClose();
      }
    },[isSuccessPresent])

    useEffect(() => {
      if(isErrorPresent) {
        onClose();
      }
    },[isErrorPresent])

    return (
        <Modal isOpen={isOpen} onClose={onClose} placement="center">
          <ModalContent>
            <ModalHeader>
              Absensi Voter
            </ModalHeader>
            <ModalBody>
              Ubah status {data?.name} menjadi hadir?
            </ModalBody>
            <ModalFooter>
              <ButtonFlat onPress={onClose}>
                Kembali
              </ButtonFlat>
              <ButtonSolid onPress={onPresent} isDisabled={isPendingPresent}>
                {isPendingPresent ? <Spinner color="default" size="sm" /> : "Iya"}
              </ButtonSolid>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
}

export default Present;