import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { ICandidate, IMemeberCandidate } from "@/types/candidate"
import { Card, CardBody, useDisclosure} from "@heroui/react";
import Image from 'next/image'
import ModalTokenValidation from "./ModalTokenValidation";
import { useState } from "react";
import ModalVoting from "./ModalVoting";

interface Typeprops {
    data: ICandidate[];
    refetchVoting: () => void;
}

const Voting = (props: Typeprops) => {
    const {
        data,
        refetchVoting
    } = props;

    
    const [tokenValidate, setTokenValidate] = useState("");
    
    const useModalVoting = useDisclosure();

    const [candidateId, setCandidateId] = useState<null | number>(null);
    const [members, setmembers] = useState<null | IMemeberCandidate[] | undefined>(null);

    return (
      <div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-6">
          {data.map((d) => (
            <Card key={d.id} className="z-0">
              <CardBody className="gap-4">
                <div className="w-full">
                  <Image src={`${d.img}`} alt={`foto-${d.nomor}`} width={480} height={480} className="w-full aspect-[3x4] object-cover object-center" />
                </div>
                <div>
                  <h1 className="text-utama font-bold text-4xl">
                    0{d.nomor}
                  </h1>
                  {d.members?.map((member) => (
                    <h2 key={member.order} className="text-xl text-semibold">
                      {member.name}
                    </h2>
                  ))}
                </div>
                <ButtonSolid onPress={() => {
                  useModalVoting.onOpen();
                  setCandidateId(Number(d.id))
                  setmembers(d.members)
                }}>
                  Pilih
                </ButtonSolid>
              </CardBody>
            </Card>
          ))}
        </div>

        <ModalTokenValidation 
          setTokenValidate={setTokenValidate}
        />


        <ModalVoting
          isOpen={useModalVoting.isOpen}
          onClose={useModalVoting.onClose}
          candidateId={candidateId as number}
          candidateMembers={members as IMemeberCandidate[]}
          token={tokenValidate}
          refetch={refetchVoting}
        />
      </div>
    )
}

export default Voting;