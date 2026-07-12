import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@heroui/react"
import useDeleteTps from "./useDeleteTps";
import { useEffect } from "react";


interface TypeProps {
  onClose: () => void;
  isOpen: boolean;
  id: string;
  refetch: () => void;
}
const DeleteTps = (props:TypeProps) => {
    const {
      isOpen,
      onClose,
      id,
      refetch
    } = props;

    const {
        isPendingDeleteTps,
        isSuccessDeleteTps,
        onDelete
    } = useDeleteTps(id);

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
            Anda yakin ingin menghapus data TPS ini ?
          </ModalBody>

          <ModalFooter>
            <Button onPress={onClose} className="bg-red-200 border-2 border-red-500 text-red-500">
              Kembali
            </Button>
            <Button onPress={onDelete} className="bg-red-800 text-white" isDisabled={isPendingDeleteTps}>
              {isPendingDeleteTps ? <Spinner color="default" size="sm" /> : "Hapus"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

export default DeleteTps;