import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure } from "@heroui/react";
import { ReactNode, useCallback, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { useRouter } from "next/router";
import TableUi from "@/compnents/ui/TableUi";
import listColumn from "./listColumn";
import useCandidate from "./useCandidate";
import { IMemeberCandidate } from "@/types/candidate";
import Image from "next/image";
import AddCandidate from "./AddCandidate";
import DeleteCandidate from "./DeleteCandidate";
import EmptyElection from "@/compnents/ui/EmptyElection";


const Candidate = () => {
    const {
        dataCandidate,
        isLoadingCandidate,
        refetchCandidate,
        isRefetchingCandidate,
        isErrorCandidate,
        errorCandidate
    } = useCandidate()

    const router = useRouter();

    const modalAddCandidate = useDisclosure();

    const modalDeleteCandidate = useDisclosure();

    const [idCandidate, setIdCandidate] = useState<string | null>(null);



    const renderCell = useCallback((data: Record<string, unknown>, column: {label: string; id: string}) => {
      const value = data[column.id as keyof typeof data]

      switch(column.id) {
        case "name" :
          return (data.members as unknown as IMemeberCandidate[]).map((member: IMemeberCandidate) => (
            <p key={member.order}>
              {member.name}
            </p>
          ))
        case "img" :
          return <Image src={`${data.img}` || ""} alt="foto-kandidat" width={480} height={360} className="w-20 rounded-lg" />
        case "actions" :
          return (
            <Dropdown >
              <DropdownTrigger>
                <CiMenuKebab className="cursor-pointer" />
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions">
                <DropdownItem 
                  key="update" 
                  onClick={() => router.push(`/admin/candidate/${data.id}`)}
                >
                  Detail
                </DropdownItem>
                <DropdownItem 
                  key="delete" 
                  onClick={() => {
                    modalDeleteCandidate.onOpen(); 
                    setIdCandidate(`${data.id}`)
                    }
                  }
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
        isErrorCandidate ? (
          errorCandidate!.message === "Election belum ada / belum dibuat" ? (
            <EmptyElection 
              title="Belum ada Election."
              textContent="Kandidat hanya dapat ditambahkan setelah Election dibuat."
            />
          ) : (
            <div>
              <h1 className="text-5xl font-bold text-utama">
                Error 
              </h1>
              <p>
                {errorCandidate?.message}
              </p>
            </div>
          )
        ) : (
          <div>
            <TableUi
              data={dataCandidate?.data || []}
              column={listColumn}
              renderCell={renderCell}
              isLoading={isLoadingCandidate || isRefetchingCandidate}

              showCreate
              textCreate="Buat Kandidat Calon"
              openCreate={modalAddCandidate.onOpen}

              emptyContent="Kandidat Calon kosong"
            />

            <AddCandidate 
              isOpen={modalAddCandidate.isOpen} 
              onClose={modalAddCandidate.onClose} 
              refetch={refetchCandidate} 
            />

            <DeleteCandidate 
              isOpen={modalDeleteCandidate.isOpen} 
              onClose={modalDeleteCandidate.onClose} 
              refetch={refetchCandidate} 
              id={`${idCandidate}`} 
            />

          </div>
        )
    )
}

export default Candidate