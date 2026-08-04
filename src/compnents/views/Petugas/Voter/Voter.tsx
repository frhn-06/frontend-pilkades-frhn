
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure } from "@heroui/react";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
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
            return data.ink ? `${data.nik}` : "-";
        case "info" :
            return data.info ? `${data.info}` : "-";   
        case "tps.name" :
          return `${(data.tps as unknown as {name: string}).name}`;
        case "actions" :
          return (
            <Dropdown >
              <DropdownTrigger>
                <CiMenuKebab className="cursor-pointer" />
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions">
                <DropdownItem 
                  key="update" 
                  onClick={() => router.push(`/petugas/voter/${data.id}`)}
                >
                  Update
                </DropdownItem>
                <DropdownItem 
                  key="delete" 
                  onClick={() => {
                    modalDeleteVoter.onOpen(); 
                    setStateVoter({
                      id: data.id as number
                    })
                  }}
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
          />

        </div>
       
    )
}

export default Voter;