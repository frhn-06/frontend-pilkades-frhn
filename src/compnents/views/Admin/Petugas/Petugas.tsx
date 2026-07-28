import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure } from "@heroui/react";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

import { useRouter } from "next/router";
import TableUi from "@/compnents/ui/TableUi";
import listColumn from "./listColumn";
import usePetugas from "./usePetugas";
import AddPetugas from "./AddPetugas";
import ChangeStatusPetugas from "./ChangeStatusPetugas";
import { IPetugas } from "@/types/petugas";
import DeletePetugas from "./DeletePetugas";



const Petugas = () => {
    const {
        dataPetugas,
        isLoadingPetugas,
        refetchPetugas,
        isRefetchingPetugas,

        setUrl,
        currentPage,
        handleChangePage,

        currentLimit,
        handleChangeLimit,
        
        currentActive,
        handleChangeActive,
        
        currentTps,
        handleChangeTps,

        handleChangeSearch,
        handleClearSearch
    } = usePetugas()

    const router = useRouter();

    const modalAddPetugas = useDisclosure();

    const modalDeletePetugas = useDisclosure();

    const modalChangeStatusPetugas = useDisclosure();

    const [statePetugas, setStatePetugas] = useState<IPetugas | null>(null)


    useEffect(() => {
      setUrl();
    },[router.isReady])


    const renderCell = useCallback((data: Record<string, unknown>, column: {label: string; id: string}) => {
      const value = data[column.id as keyof typeof data]

      switch(column.id) {
        case "tps.name" :
          return `${(data.tps as unknown as {name: string}).name}`;
        case "tps.alamat" :
          return `${(data.tps as unknown as {alamat: string}).alamat}`;
        case "actions" :
          return (
            <Dropdown >
              <DropdownTrigger>
                <CiMenuKebab className="cursor-pointer" />
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions">
                <DropdownItem 
                  key="update" 
                  onClick={() => router.push(`/admin/petugas/${data.id}`)}
                >
                  Detail
                </DropdownItem>
                <DropdownItem 
                  key="aktif-nonaktif" 
                  onClick={() => {
                    setStatePetugas({
                      id: data.id as number,
                      isActive: data.isActive as boolean
                    })
                    modalChangeStatusPetugas.onOpen()
                  }}
                >
                  {data.isActive ? "NonAktifkan" : "Aktifkan"}
                </DropdownItem>
                <DropdownItem 
                  key="delete" 
                  onClick={() => {
                    modalDeletePetugas.onOpen(); 
                    setStatePetugas({
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
              data={dataPetugas?.data || []}
              column={listColumn}
              renderCell={renderCell}
              isLoading={isLoadingPetugas || isRefetchingPetugas}
  
              showCreate
              textCreate="Buat data petugas"
              openCreate={modalAddPetugas.onOpen}
  
              emptyContent="Data petugas kosong"
  
              showLimit
              currentLimit={`${currentLimit}`}
              onChangeLimit={handleChangeLimit}
              
              showPagination={dataPetugas?.pagination?.totalPage > 1}
              currentPage={`${currentPage}`}
              onPagination={handleChangePage}
              totalPage={dataPetugas?.pagination?.totalPage}
  
              showSearch
              onChangeSearch={handleChangeSearch}
              onClearSearch={handleClearSearch}
  
              showStatus
              onChangeStatus={handleChangeActive}
              currentStatus={`${currentActive}`}
            />
          )}

          <AddPetugas 
            isOpen={modalAddPetugas.isOpen} 
            onClose={modalAddPetugas.onClose} 
            refetch={refetchPetugas} 
          />

          <ChangeStatusPetugas 
            isOpen={modalChangeStatusPetugas.isOpen} 
            onClose={modalChangeStatusPetugas.onClose} 
            isActive={Boolean(statePetugas?.isActive)} 
            id={`${statePetugas?.id}`}
            refetch={refetchPetugas}
          />

          <DeletePetugas 
            isOpen={modalDeletePetugas.isOpen} 
            onClose={modalDeletePetugas.onClose} 
            refetch={refetchPetugas} 
            id={`${statePetugas?.id}`} 
          />

        </div>
       
    )
}

export default Petugas;