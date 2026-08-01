import { Modal, ModalBody, ModalContent, ModalHeader, Spinner, useDisclosure } from "@heroui/react";
import listTombol from "./listTombol";
import { SetStateAction, useEffect, useState } from "react";
import useModalTokenValidation from "./useModalTokenValidation";

interface TypeProps {
  setTokenValidate: React.Dispatch<SetStateAction<string>>
}
const ModalTokenValidation = (props: TypeProps) => {
  const {
    setTokenValidate
  } = props;
  
  const {
    isPendingValidationToken,
    isSuccessValidationToken,
    isErrorValidationToken,
    errorValidationToken,
    onValidation
  } = useModalTokenValidation(setTokenValidate);


  const [inputToken, setInputToken] = useState("")

  const [modal, setModal] = useState(false);

  useEffect(() => {
    if(inputToken.length === 6) {
      onValidation(inputToken);
      setInputToken((prev) => "")
    }
  },[inputToken])

  useEffect(() => {
    if(isSuccessValidationToken) {
      setModal(true);
    }
  },[isSuccessValidationToken])


  const handleClickKeypad = (tombol: {id:string; label: string | React.ReactNode; value: string}) => {
    if(tombol.id === "delete") {
      setInputToken((prev) => {
        const result = prev.slice(0, -1)
        return result;
      })
      return
    }
    
    if(tombol.id === "clear") {
      setInputToken("");
      return
    }
    
    setInputToken((prev) => {
      if(prev.length >= 6) return prev;
      return prev + tombol.value
    })
    
  }

    return (
        <Modal isOpen={!modal} backdrop="blur" placement="center" className="z-0">
          <ModalContent>
            <ModalHeader>
              <h1 className="font-bold text-utama">
                {isPendingValidationToken ? "Menvalidasi..." : "Masukkan token vote"}
              </h1>
            </ModalHeader>
            <ModalBody className="gap-6">
              {isErrorValidationToken && (
                <p className="text-danger">
                  {errorValidationToken?.message}
                </p>
              )} 
              <div className="flex items-center justify-center gap-4">
                {isPendingValidationToken ? (
                  <Spinner color="danger" />
                ) : 
                  [0,1,2,3,4,5].map((i) => (
                    <div key={i} className="aspect-square rounded-lg border-2 border-yellow-400 flex-1 flex justify-center items-center">
                      <h1 className="font-bold text-xl text-utama">
                        {inputToken[i]}
                      </h1>
                    </div>
                  ))
                }
              </div>

              <div className="grid grid-cols-3 w-1/2 gap-1 mx-auto">
                {listTombol.map((tombol) => (
                  <div key={tombol.id}>
                    <div className="border-2 border-gray-700 flex justify-center items-center aspect-square rounded-lg bg-red-500 cursor-pointer hover:bg-red-400 transition duration-250 active:translate-y-1 active:bg-red-700" onClick={() => handleClickKeypad(tombol)}>
                      <div className="text-white text-xl font-bold">
                        {tombol.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-utama font-bold">
                  NB:
                </p>
                <p className="text-utama font-semibold">
                  Anda tidak akan bisa memilih calon kandidat sebelum anda mengisi token dengan sesuai
                </p>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
    )
}

export default ModalTokenValidation;