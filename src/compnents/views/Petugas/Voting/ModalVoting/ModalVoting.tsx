import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@heroui/react"
import { useEffect } from "react";
import { IMemeberCandidate } from "@/types/candidate";
import useModalVoting from "./useModalVoting";

interface TypeProps {
  onClose: () => void;
  isOpen: boolean;
  candidateId: number;
  candidateMembers: IMemeberCandidate[];
  token: string;
  refetch: () => void;
}
const ModalVoting = (props: TypeProps) => {
    const {
      onClose,
      isOpen,
      candidateId,
      candidateMembers,
      token,
      refetch
    } = props;

    const {
        onVoting,
        isPendingVoting,
        isSuccessVoting

    } = useModalVoting(token, candidateId)


    useEffect(() => {
      if(isSuccessVoting) {
        refetch();
        onClose();
      }
    },[isSuccessVoting]);

    const member = () => {
      const result = candidateMembers?.map((member) => member.name).join(" X ");
      return result
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <ModalHeader>
              Coblos Pilihanmu
            </ModalHeader>
            <ModalBody>
              Anda yakin untuk memilih {member()}?
            </ModalBody>
            <ModalFooter>
              <ButtonFlat onPress={onClose}>
                Kembali
              </ButtonFlat>
              <ButtonSolid onPress={onVoting} isDisabled={isPendingVoting}>
                {isPendingVoting ? <Spinner color="default" size="sm" /> : "Iya"}
              </ButtonSolid>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
}

export default ModalVoting;