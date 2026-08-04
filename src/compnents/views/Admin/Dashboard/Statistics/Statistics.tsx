import { IStatistics } from "@/types/dashboard"
import { Card, CardBody } from "@heroui/react";
import CountUp from "react-countup";

interface TypeProps {
    statistics?: IStatistics;
}

const Statistics = (props: TypeProps) => {
    const {
        statistics
    } = props;

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div>
          <Card className="relative text-utama h-full bg-inti p-2">
            <CardBody className="gap-2 z-2">
              <p>
                Total keseluruhan pemilih :
              </p>
              <div className="flex justify-center">
                <h1 className="text-6xl font-bold">
                  <CountUp 
                    start={0}
                    end={Number(statistics?.totalAllVoter)}
                  />
                </h1>
              </div>
            </CardBody>
   
            <div className="absolute top-0 left-0 right-0 h-[92%] bg-white rounded-t-xl rounded-b-2xl z-0" />
          </Card>
        </div>
        <div>
          <Card className="relative text-utama h-full bg-inti p-2">
            <CardBody className="gap-2 z-2">
              <p>
                Jumlah pemilih hadir :
              </p>
              <div className="flex justify-center">
                <h1 className="text-6xl font-bold">
                  <CountUp 
                    start={0}
                    end={Number(statistics?.totalVoterPresent)}
                  />
                </h1>
              </div>
            </CardBody>
   
            <div className="absolute top-0 left-0 right-0 h-[92%] bg-white rounded-t-xl rounded-b-2xl z-0" />
          </Card>
        </div>
        <div>
          <Card className="relative text-utama h-full bg-inti p-2">
            <CardBody className="gap-2 z-2">
              <p>
                Jumlah pemilih absen :
              </p>
              <div className="flex justify-center">
                <h1 className="text-6xl font-bold">
                  <CountUp 
                    start={0}
                    end={Number(statistics?.totalVoterAbsen)}
                  />
                </h1>
              </div>
            </CardBody>
   
            <div className="absolute top-0 left-0 right-0 h-[92%] bg-white rounded-t-xl rounded-b-2xl z-0" />
          </Card>
        </div>
        <div>
          <Card className="relative text-utama h-full bg-inti p-2">
            <CardBody className="gap-2 z-2">
              <p>
                Jumlah pemilih voting :
              </p>
              <div className="flex justify-center">
                <h1 className="text-6xl font-bold">
                  <CountUp 
                    start={0}
                    end={Number(statistics?.totalVoterVote)}
                  />
                </h1>
              </div>
            </CardBody>
   
            <div className="absolute top-0 left-0 right-0 h-[92%] bg-white rounded-t-xl rounded-b-2xl z-0" />
          </Card>
        </div>
        <div>
          <Card className="relative text-utama h-full bg-inti p-2">
            <CardBody className="gap-2 z-2">
              <p>
                Jumlah pemilih belum voting :
              </p>
              <div className="flex justify-center">
                <h1 className="text-6xl font-bold">
                  <CountUp 
                    start={0}
                    end={Number(statistics?.totalVoterNotVote)}
                  />
                </h1>
              </div>
            </CardBody>
   
            <div className="absolute top-0 left-0 right-0 h-[92%] bg-white rounded-t-xl rounded-b-2xl z-0" />
          </Card>
        </div>
      </div>
    )
}

export default Statistics;