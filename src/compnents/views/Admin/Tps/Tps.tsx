import { Chip, useDisclosure } from "@heroui/react";
import { ReactNode, useCallback, useState } from "react";
import { useRouter } from "next/router";
import useTps from "./useTps";
import TableUi from "@/compnents/ui/TableUi";
import listColumn from "./listColumn";
import AddTps from "./AddTps";
import DeleteTps from "./DeleteTps";
import EmptyElection from "@/compnents/ui/EmptyElection";


const Tps = () => {
    const {
       dataTps,
        isLoadingTps,
        refetchTps,
        isRefetchingTps,
        isErrorTps,
        errorTps
    } = useTps()

    const router = useRouter();

    const modalAddTps = useDisclosure();

    const modalDeleteTps = useDisclosure();

    const [stateTps, setstateTps] = useState<Record<string, unknown> | null>(null);



    const renderCell = useCallback((data: Record<string, unknown>, column: {label: string; id: string}) => {
      const value = data[column.id as keyof typeof data]

      switch(column.id) {
        case "actions" :
          return (
            <div className="flex gap-2">
              <Chip 
                className="cursor-pointer bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-700 transition"
                onClick={() => router.push(`/admin/tps/${data.id}`)}                
              >
                Edit
              </Chip>

              <Chip 
                className="cursor-pointer bg-red-500 text-white hover:bg-red-400 active:bg-red-700 transition"
                onClick={() => {
                  modalDeleteTps.onOpen();
                  setstateTps({
                    id: `${data.id}`,
                    name: data.name
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
        isErrorTps ? (
          errorTps!.message === "Election belum ada / belum dibuat" ? (
            <EmptyElection 
              title="Belum ada Election yang aktif."
              textContent="Data TPS hanya dapat dibuat setelah Election tersedia."
            />
          ) : (
            <div>
              <h1 className="text-5xl font-bold text-utama">
                Error 
              </h1>
              <p>
                {errorTps?.message}
              </p>
            </div>
          )
        ) : (
          <div>
            <TableUi
              data={dataTps?.data || []}
              column={listColumn}
              renderCell={renderCell}
              isLoading={isLoadingTps || isRefetchingTps}
    
              showCreate
              textCreate="Buat TPS"
              openCreate={modalAddTps.onOpen}
    
              emptyContent="TPS kosong"
            />
    
            <AddTps isOpen={modalAddTps.isOpen} onClose={modalAddTps.onClose} refetch={refetchTps} />
    
            <DeleteTps isOpen={modalDeleteTps.isOpen} onClose={modalDeleteTps.onClose} refetch={refetchTps} tps={stateTps} />
    
          </div>
        )
    )
}

export default Tps