
import { Chip, useDisclosure } from "@heroui/react";
import { ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import TableUi from "@/compnents/ui/TableUi";
import listColumn from "./listColumn";
import { IVoter } from "@/types/voter";
import { LIST_LIMIT_VOTER } from "@/utils/constanta";
import useAbsensi from "./useAbsensi";
import Present from "./Present";
import GenerateToken from "./GenerateToken";
import toasterContext from "@/contexts/toasterContext";
import NoPresent from "./NoPresent";



const Absensi = () => {
    const {
        dataVoter,
        isLoadingVoter,
        refetchVoter,
        isRefetchingVoter,

        setUrl,
        currentPage,
        handleChangePage,

        currentLimit,
        handleChangeLimit,
      
        handleChangeSearch,
        handleClearSearch
    } = useAbsensi();

    const {setToaster} = useContext(toasterContext);


    const router = useRouter();

    const modalPresent = useDisclosure();

    const modalNoPresent = useDisclosure();

    const modalGenerateToken = useDisclosure();

    const [stateVoter, setStateVoter] = useState<IVoter | null>(null)


    useEffect(() => {
      if(router.isReady) {
        setUrl();
      }
    },[router.isReady])


    const renderCell = useCallback((data: Record<string, unknown>, column: {label: string; id: string}) => {
      const value = data[column.id as keyof typeof data]

      switch(column.id) {
        case "nik" : 
          return data.nik ? `${data.nik}` : "-";
        case "info" :
          return data.info ? `${data.info}` : "-";   
        case "present" :
          return data.isPresent ? 
            <Chip variant="flat" color="success">Hadir</Chip> : 
            <Chip variant="flat" color="warning">Belum Hadir</Chip>
        case "vote" :
          return data.isVoted ? 
            <Chip variant="flat" color="success">Vote</Chip> :
            <Chip variant="flat" color="warning">Belum Vote</Chip>
        case "actions" :
          return (
            <div className="flex gap-2">
              <Chip 
                color="danger" 
                className="cursor-pointer"
                onClick={() => {
                  if(data.isPresent) {
                    modalNoPresent.onOpen();
                  } else {
                    modalPresent.onOpen();
                  }
                  setStateVoter({
                    id: Number(data.id),
                    name: `${data.name}`,
                  })
                }}            
              >
                {data.isPresent ? "Batal hadir" : "Hadir"}
              </Chip>

              <Chip 
                color="primary"
                className="cursor-pointer"
                isDisabled={!data.isPresent}
                onClick={() => {
                  if(!data.isPresent) {
                    setToaster({
                      type: "error",
                      message: "Voter belum hadir"
                    })
                  }
                  if(data.isVoted) {
                    setToaster({
                      type: "error",
                      message: "Voter sudah mencoblos"
                    })
                  }
                  if(data.isPresent && !data.isVoted) {
                    modalGenerateToken.onOpen();
                    setStateVoter({
                      id: Number(data.id),
                      name: `${data.name}`,
                    })
                  } 
                }}
              >
                Generate Token
              </Chip>
            </div>
            
          )
          default :
            return value as ReactNode;
      }
    },[router.isReady]) 



    return (
        <div>
          {Object.keys(router.pathname).length > 0 && (
            <TableUi
              data={dataVoter?.data || []}
              column={listColumn}
              renderCell={renderCell}
              isLoading={isLoadingVoter || isRefetchingVoter}
  
              emptyContent="Data voter kosong"
  
              showLimit
              listLimit={LIST_LIMIT_VOTER}
              currentLimit={`${currentLimit}`}
              onChangeLimit={handleChangeLimit}
              
              showPagination={dataVoter?.pagination?.totalPage > 1}
              currentPage={`${currentPage}`}
              onPagination={handleChangePage}
              totalPage={dataVoter?.pagination?.totalPage}
  
              showSearch
              onChangeSearch={handleChangeSearch}
              onClearSearch={handleClearSearch}
  
            />
          )}

          <Present 
            isOpen={modalPresent.isOpen} 
            onClose={modalPresent.onClose} 
            refetch={refetchVoter}
            data={stateVoter!}
          />

          <NoPresent 
            isOpen={modalNoPresent.isOpen} 
            onClose={modalNoPresent.onClose} 
            refetch={refetchVoter}
            data={stateVoter!}
          />


          <GenerateToken 
            isOpen={modalGenerateToken.isOpen} 
            onClose={modalGenerateToken.onClose} 
            data={stateVoter!}
          />

        </div>
       
    )
}

export default Absensi;