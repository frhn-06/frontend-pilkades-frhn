import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@heroui/react"
import useChangeStatusPetugas from "./useChangeStatusPetugas";
import { useEffect } from "react";

interface TypeProps {
  onClose: () => void;
  isOpen: boolean;
  isActive: boolean;
  id: string;
  refetch: () => void;
}
const ChangeStatusPetugas = (props: TypeProps) => {
    const {
      onClose,
      isOpen,
      isActive,
      id,
      refetch
    } = props;

    const {
      onNonActive,
      isSuccessNonActive,
      isPendingNonActive,

      onActive,
      isSuccessActive,
      isPendingActive
    } = useChangeStatusPetugas(id)

    useEffect(() => {
      if(isSuccessNonActive || isSuccessActive) {
        refetch();
        onClose();
      }
    },[isSuccessNonActive, isSuccessActive])

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <ModalHeader>
              {isActive ? "Non Aktifkan Petugas" : "Aktifkan Petugas"}
            </ModalHeader>
            <ModalBody>
              {isActive ? 
                "Anda yakin untuk menonaktifkan petugas ini? petugas tidak diberi akses untuk mengolah data voting pemilihan" :
                "Anda yakin untuk mengaktifkan petugas ini? petugas akan diberi akses untuk mengolah data voting pemilihan"
              }
            </ModalBody>
            <ModalFooter>
              <ButtonFlat onPress={onClose}>
                Kembali
              </ButtonFlat>
              {isActive ? (
                <ButtonSolid onPress={onNonActive} isDisabled={isPendingNonActive}>
                  {isPendingNonActive ? <Spinner color="default" size="sm" /> : "Iya"}
                </ButtonSolid>
              ):(
                <ButtonSolid onPress={onActive} isDisabled={isPendingActive}>
                  {isPendingActive ? <Spinner color="default" size="sm" /> : "Iya"}
                </ButtonSolid>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
}

export default ChangeStatusPetugas;