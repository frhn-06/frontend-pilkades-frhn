import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@heroui/react"
import { useEffect } from "react";
import useDeletePetugas from "./useDeletePetugas";

interface TypeProps {
  onClose: () => void;
  isOpen: boolean;
  id: string;
  refetch: () => void;
  name: string;
}
const DeletePetugas = (props: TypeProps) => {
    const {
      onClose,
      isOpen,
      id,
      refetch,
      name
    } = props;

    const {
        onDeletePetugas,
        isPendingDeletePetugas,
        isSuccessDeletePetugas

    } = useDeletePetugas(id)


    useEffect(() => {
      if(isSuccessDeletePetugas) {
        refetch();
        onClose();
      }
    },[isSuccessDeletePetugas])

    return (
        <Modal isOpen={isOpen} onClose={onClose} placement="center">
          <ModalContent>
            <ModalHeader>
              Hapus Petugas
            </ModalHeader>
            <ModalBody>
              Anda yakin untuk menghapus {name}? petugas yg dihapus akan permanen tidak diberi hak akses voting pemilihan
            </ModalBody>
            <ModalFooter>
              <ButtonFlat onPress={onClose}>
                Kembali
              </ButtonFlat>
              <ButtonSolid onPress={onDeletePetugas} isDisabled={isPendingDeletePetugas}>
                {isPendingDeletePetugas ? <Spinner color="default" size="sm" /> : "Iya"}
              </ButtonSolid>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
}

export default DeletePetugas;