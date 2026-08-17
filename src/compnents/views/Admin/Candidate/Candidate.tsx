import { Chip, useDisclosure } from "@heroui/react";
import { ReactNode, useCallback, useState } from "react";
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

    const [stateCandidate, setStateCandidate] = useState<Record<string, unknown> | null>(null);



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
            <div className="flex gap-2">
              <Chip 
                className="cursor-pointer bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-700 transition"
                onClick={() => router.push(`/admin/candidate/${data.id}`)}                
              >
                Edit
              </Chip>

              <Chip 
                className="cursor-pointer bg-red-500 text-white hover:bg-red-400 active:bg-red-700 transition"
                onClick={() => {
                  modalDeleteCandidate.onOpen(); 
                  setStateCandidate({
                    id: data.id as number,
                    name: (data.members as IMemeberCandidate[]).map((member) => member.name).join(" & ")
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
              id={`${stateCandidate?.id}`}
              name={`${stateCandidate?.name}`} 
            />

          </div>
        )
    )
}

export default Candidate