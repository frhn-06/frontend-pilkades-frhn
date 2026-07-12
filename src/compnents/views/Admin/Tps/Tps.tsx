import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure } from "@heroui/react";
import { ReactNode, useCallback, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

import { useRouter } from "next/router";
import useTps from "./useTps";
import TableUi from "@/compnents/ui/TableUi";
import listColumn from "./listColumn";
import AddTps from "./AddTps";
import DeleteTps from "./DeleteTps";


const Tps = () => {
    const {
       dataTps,
        isLoadingTps,
        refetchTps,
        isRefetchingTps
    } = useTps()

    const router = useRouter();

    const modalAddTps = useDisclosure();

    const modalDeleteTps = useDisclosure();

    const [idTps, setIdTps] = useState<string | null>(null);



    const renderCell = useCallback((data: Record<string, unknown>, column: {label: string; id: string}) => {
      const value = data[column.id as keyof typeof data]

      switch(column.id) {
        case "actions" :
          return (
            <Dropdown >
              <DropdownTrigger>
                <CiMenuKebab className="cursor-pointer" />
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions">
                <DropdownItem key="update" onClick={() => router.push(`/admin/tps/${data.id}`)}>
                  Update
                </DropdownItem>
                <DropdownItem key="delete" onClick={() => {modalDeleteTps.onOpen(); setIdTps(`${data.id}`)}}>
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

          <DeleteTps isOpen={modalDeleteTps.isOpen} onClose={modalDeleteTps.onClose} refetch={refetchTps} id={`${idTps}`} />

        </div>
        // <div className="py-12 px-4 lg:px-8">


         

          // <DeleteCategory categoryId={`${idTps}`} onClose={modalDeleteTps.onClose} isOpen={modalDeleteTps.isOpen} refetch={refetchCategories} /> */}

        // </div>
    )
}

export default Tps