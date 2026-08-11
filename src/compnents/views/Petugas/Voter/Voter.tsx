
import { Chip, useDisclosure } from "@heroui/react";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import TableUi from "@/compnents/ui/TableUi";
import listColumn from "./listColumn";
import useVoter from "./useVoter";
import { IVoter } from "@/types/voter";
import { LIST_LIMIT_VOTER } from "@/utils/constanta";
import AddVoter from "./AddVoter";
import DeleteVoter from "./DeleteVoter";



const Voter = () => {
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
    } = useVoter();


    const router = useRouter();

    const modalAddVoter = useDisclosure();

    const modalDeleteVoter = useDisclosure();

    const [stateVoter, setStateVoter] = useState<IVoter | null>(null)


    useEffect(() => {
      setUrl();
    },[router.isReady])


    const renderCell = useCallback((data: Record<string, unknown>, column: {label: string; id: string}) => {
      const value = data[column.id as keyof typeof data]

      switch(column.id) {
        case "nik" : 
            return data.nik ? `${data.nik}` : "-";
        case "info" :
            return data.info ? `${data.info}` : "-";   
        case "tps.name" :
          return `${(data.tps as unknown as {name: string}).name}`;
        case "actions" :
          return (
            <div className="flex gap-2">
              <Chip 
                color="primary" 
                className="cursor-pointer"
                onClick={() => router.push(`/petugas/voter/${data.id}`)}                
              >
                Edit
              </Chip>

              <Chip 
                color="danger" 
                className="cursor-pointer"
                onClick={() => {
                  modalDeleteVoter.onOpen(); 
                  setStateVoter({
                    id: data.id as number,
                    name: data.name as string
                  })
                }}
              >
                Hapus
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
  
              showCreate
              textCreate="Buat data voter"
              openCreate={modalAddVoter.onOpen}
  
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

          <AddVoter 
            isOpen={modalAddVoter.isOpen} 
            onClose={modalAddVoter.onClose} 
            refetch={refetchVoter}
          />


          <DeleteVoter 
            isOpen={modalDeleteVoter.isOpen} 
            onClose={modalDeleteVoter.onClose} 
            refetch={refetchVoter} 
            id={`${stateVoter?.id}`} 
            name={`${stateVoter?.name}`}
          />

        </div>
       
    )
}

export default Voter;