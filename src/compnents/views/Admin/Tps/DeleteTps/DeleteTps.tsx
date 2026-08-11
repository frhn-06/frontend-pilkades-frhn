import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@heroui/react"
import useDeleteTps from "./useDeleteTps";
import { useEffect } from "react";
import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";


interface TypeProps {
  onClose: () => void;
  isOpen: boolean;
  tps: Record<string, unknown> | null;
  refetch: () => void;
}
const DeleteTps = (props:TypeProps) => {
    const {
      isOpen,
      onClose,
      tps,
      refetch
    } = props;

    const {
        isPendingDeleteTps,
        isSuccessDeleteTps,
        onDelete
    } = useDeleteTps(`${tps?.id}`);

    useEffect(() => {
      if(isSuccessDeleteTps) {
        refetch();
        onClose();
      }
    }, [isSuccessDeleteTps])

    return(
      <Modal isOpen={isOpen} onClose={onClose} placement="center">
        <ModalContent>
          <ModalHeader>
            Hapus data TPS
          </ModalHeader>

          <ModalBody>
            Anda yakin ingin menghapus {`${tps?.name}`} ?
          </ModalBody>

          <ModalFooter>
            <ButtonFlat onPress={onClose}>
              Kembali
            </ButtonFlat>
           
            <ButtonSolid onPress={onDelete} isDisabled={isPendingDeleteTps}>
              {isPendingDeleteTps ? <Spinner color="default" size="sm" /> : "Hapus"}
            </ButtonSolid>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

export default DeleteTps;