import { IMonitoringAdmin } from "@/types/monitoring"
import { Card, CardBody, CardHeader, Progress } from "@heroui/react";
import Image from 'next/image'

interface TypeProps {
    data: IMonitoringAdmin;
}
const Monitoring = (props: TypeProps) => {
    const {
      data
    } = props;

    return (
      <div>
        <div className="flex flex-col lg:flex-row-reverse flex-wrap gap-6">
          <div className="flex flex-col gap-6 mb-8 flex-1">
            <Card className="p-4 w-full">
              <CardBody className="gap-4">
                <h1 className="font-bold lg:text-xl text-utama">
                  Progress Pemungutan
                </h1>
                <div className="flex gap-6 items-center">
                  <Progress 
                    aria-label="progress" 
                    className="max-w-md" 
                    color="danger" value={data.progress.percentageVoterVote} 
                  />
                
                  <p className="text-utama w-fit">
                    {data.progress.percentageVoterVote}%
                  </p>
                </div>
                <p>
                  {data.progress.totalVoterVote} Pencoblos dari {data.progress.totalAllVoter} undangan
                </p>
              </CardBody>
            </Card>
          </div>


          <div className="flex-2">
            <h1 className="text-utama font-bold text-xl lg:text-2xl mb-4">
              Perolehan Suara Keseluruhan TPS
            </h1>

            <div className="flex flex-col gap-4">
              {data.candidates.map((candid, i) => (
                <Card key={candid.id} className="p-2 w-full">
                  <CardHeader>
                    <h1 className="text-utama font-bold lg:text-xl">
                      Paslon {i + 1}
                    </h1>
                  </CardHeader>
                  <CardBody className="gap-6">
                    <div className="flex gap-4">
                      <div className="w-14">
                        <Image src={`${candid.img}` || ""} alt={`foto-${candid.id}`} width={360} height={360} className="w-full rounded-lg" />
                      </div>
                      <div className="flex-1">
                        {candid.members?.map((membe) => (
                          <h2 key={membe.order} className="text-utama font-semibold text-xl lg:text-2xl">
                            {membe.name}
                          </h2>
                        ))}
                        <div className="flex flex-col gap-1 mt-4">
                          <div className="flex gap-6 items-center">
                            <Progress 
                              aria-label="progress" 
                              color="danger" 
                              value={candid.percentage} 
                              size="md"
                            />
                            <p className="text-utama">
                              {candid.percentage}%
                            </p>
                          </div>

                          <p>
                            {candid.vote} Pemilih dari {data.progress.totalVoterVote} yang sudah mencoblos
                          </p>
                        </div>
                      </div>
                    </div>
                    

                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>


      </div>  
    )
}

export default Monitoring;