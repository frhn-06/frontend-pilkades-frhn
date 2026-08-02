import { IElectionDashboard } from "@/types/dashboard";
import { Card, CardBody } from "@heroui/react"
import Image from 'next/image'

interface TypeProps {
  election?: IElectionDashboard;
}
const Info = (props: TypeProps) => {
    const {
      election
    } = props;

    return (
      <Card className="w-full max-w-3xl p-4"> 
        <CardBody>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <div>
              <h1 className="text-utama text-xl lg:text-2xl font-bold w-fit mb-3">
                {election?.name}
              </h1>
          
              <p className=" text-gray-400">
                Status
              </p>
              <div className="flex items-center gap-1">
                <div className="rounded-full w-5 h-5 bg-white border-2 border-green-500 flex justify-center items-center">
                  <div className="rounded-full w-3 h-3 bg-green-500" />
                </div>
                <p className="text-utama">
                  {election?.status}
                </p>
              </div>
            </div>
            {election?.logo && (
              <div className="w-1/2">
                <Image src={`${election.logo}` || ""} alt="logo" width={480} height={240} className="w-full rounded-2xl" />
              </div>
            )}
          </div>
        </CardBody>
      </Card>
    )
}

export default Info;