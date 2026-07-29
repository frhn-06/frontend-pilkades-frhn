import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@heroui/react"
import { useEffect } from "react";
import useDeleteVoter from "./useDeleteVoter";

interface TypeProps {
  onClose: () => void;
  isOpen: boolean;
  id: string;
  refetch: () => void;
}
const DeleteVoter = (props: TypeProps) => {
    const {
      onClose,
      isOpen,
      id,
      refetch
    } = props;

    const {
        onDeleteVoter,
        isPendingDeleteVoter,
        isSuccessDeleteVoter

    } = useDeleteVoter(id)


    useEffect(() => {
      if(isSuccessDeleteVoter) {
        refetch();
        onClose();
      }
    },[isSuccessDeleteVoter])

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <ModalHeader>
              Hapus Voter
            </ModalHeader>
            <ModalBody>
              Anda yakin untuk menghapus data voter ini?
            </ModalBody>
            <ModalFooter>
              <ButtonFlat onPress={onClose}>
                Kembali
              </ButtonFlat>
              <ButtonSolid onPress={onDeleteVoter} isDisabled={isPendingDeleteVoter}>
                {isPendingDeleteVoter ? <Spinner color="default" size="sm" /> : "Iya"}
              </ButtonSolid>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
}

export default DeleteVoter;