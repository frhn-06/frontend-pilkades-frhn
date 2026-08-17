import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@heroui/react"
import { useEffect } from "react";
import useDeleteCandidate from "./useDeleteCandidate";

interface TypeProps {
  onClose: () => void;
  isOpen: boolean;
  id: string;
  refetch: () => void;
  name: string;
}
const DeleteCandidate = (props: TypeProps) => {
    const {
      onClose,
      isOpen,
      id,
      refetch,
      name
    } = props;

    const {
        onDeleteCandidate,
        isPendingDeleteCandidate,
        isSuccessDeleteCandidate

    } = useDeleteCandidate(id)


    useEffect(() => {
      if(isSuccessDeleteCandidate) {
        refetch();
        onClose();
      }
    },[isSuccessDeleteCandidate])

    return (
        <Modal isOpen={isOpen} onClose={onClose} placement="center">
          <ModalContent>
            <ModalHeader>
              Hapus Kandidat Calon Pemilihan
            </ModalHeader>
            <ModalBody>
              Anda yakin untuk menghapus {name}? kandidat yg dihapus akan permanen tidak ikut serta pemilihan
            </ModalBody>
            <ModalFooter>
              <ButtonFlat onPress={onClose}>
                Kembali
              </ButtonFlat>
              <ButtonSolid onPress={onDeleteCandidate} isDisabled={isPendingDeleteCandidate }>
                {isPendingDeleteCandidate ? <Spinner color="default" size="sm" /> : "Iya"}
              </ButtonSolid>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
}

export default DeleteCandidate;