import { Chip, useDisclosure } from "@heroui/react";
import { ReactNode, useCallback, useEffect, useState } from "react";

import { useRouter } from "next/router";
import TableUi from "@/compnents/ui/TableUi";
import listColumn from "./listColumn";
import usePetugas from "./usePetugas";
import AddPetugas from "./AddPetugas";
import ChangeStatusPetugas from "./ChangeStatusPetugas";
import { IPetugas } from "@/types/petugas";
import DeletePetugas from "./DeletePetugas";
import EmptyElection from "@/compnents/ui/EmptyElection";



const Petugas = () => {
    const {
        dataPetugas,
        isLoadingPetugas,
        refetchPetugas,
        isRefetchingPetugas,
        isErrorPetugas,
        errorPetugas,

        setUrl,
        currentPage,
        handleChangePage,

        currentLimit,
        handleChangeLimit,
        
        currentActive,
        handleChangeActive,

        handleChangeSearch,
        handleClearSearch
    } = usePetugas()

    const router = useRouter();

    const modalAddPetugas = useDisclosure();

    const modalDeletePetugas = useDisclosure();

    const modalChangeStatusPetugas = useDisclosure();

    const [statePetugas, setStatePetugas] = useState<IPetugas | null>(null)


    useEffect(() => {
      if(router.isReady) {
        setUrl();
      }
    },[router.isReady])


    const renderCell = useCallback((data: Record<string, unknown>, column: {label: string; id: string}) => {
      const value = data[column.id as keyof typeof data]

      switch(column.id) {
        case "tps.name" :
          return `${(data.tps as unknown as {name: string}).name}`;
        case "tps.location" :
          return `${(data.tps as unknown as {location: string}).location}`;
        case "actions" :
          return (
            <div className="flex gap-2">
              <Chip 
                className="cursor-pointer bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-700 transition"
                onClick={() => router.push(`/admin/petugas/${data.id}`)}                
              >
                Edit
              </Chip>

              <Chip
                className="cursor-pointer bg-yellow-500 text-white hover:bg-yellow-400 active:bg-yellow-700 transition"
                variant="flat"
                onClick={() => {
                  setStatePetugas({
                    id: data.id as number,
                    isActive: data.isActive as boolean,
                    name: data.name as string
                  })
                  modalChangeStatusPetugas.onOpen()
                }}
              >
                {data.isActive ? "Non Aktifkan" : "Aktifkan"}
              </Chip>

              <Chip 
                className="cursor-pointer bg-red-500 text-white hover:bg-red-400 active:bg-red-700 transition"
                onClick={() => {
                  modalDeletePetugas.onOpen(); 
                  setStatePetugas({
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
            isErrorPetugas ? (
              errorPetugas?.message === "Election belum ada / belum dibuat" ? (
                <EmptyElection
                  title="Election belum tersedia."
                  textContent="Silakan buat Election terlebih dahulu sebelum menambahkan petugas TPS."
                />
              ) : (
                <div>
                  <h1 className="text-5xl font-bold text-utama">
                    Error 
                  </h1>
                  <p>
                    {errorPetugas?.message}
                  </p>
                </div>
              )
            ) : (
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
            )
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
            name={`${statePetugas?.name}`}
          />

          <DeletePetugas 
            isOpen={modalDeletePetugas.isOpen} 
            onClose={modalDeletePetugas.onClose} 
            refetch={refetchPetugas} 
            id={`${statePetugas?.id}`}
            name={`${statePetugas?.name}`}
          />

        </div>
       
    )
}

export default Petugas;