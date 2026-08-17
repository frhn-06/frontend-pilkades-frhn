import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@heroui/react"
import { useEffect } from "react";
import { IVoter } from "@/types/voter";
import useGenerateToken from "./useGenerateToken";

interface TypeProps {
  onClose: () => void;
  isOpen: boolean;
  data: IVoter;
}
const GenerateToken = (props: TypeProps) => {
    const {
      onClose,
      isOpen,
      data,
    } = props;

    const {
        onGenerateToken,
        isPendingGenerateToken,
        isSuccessGenerateToken,
        isErrorGenerateToken
    } = useGenerateToken(Number(data?.id))




    useEffect(() => {
      if(isErrorGenerateToken) {
        onClose();
      }
    },[isErrorGenerateToken])

    return (
        <Modal isOpen={isOpen} onClose={onClose} placement="center">
          <ModalContent>
            <ModalHeader>
              Absensi Voter
            </ModalHeader>
            <ModalBody>
              Generate token untuk {data?.name}?
            </ModalBody>
            <ModalFooter>
              <ButtonFlat onPress={onClose}>
                Kembali
              </ButtonFlat>
              <ButtonSolid onPress={onGenerateToken} isDisabled={isPendingGenerateToken}>
                {isPendingGenerateToken ? <Spinner color="default" size="sm" /> : "Generate"}
              </ButtonSolid>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
}

export default GenerateToken;