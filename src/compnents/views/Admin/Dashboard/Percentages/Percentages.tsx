import { IPercentagesDashboard } from "@/types/dashboard"
import { Card, CardBody, Progress } from "@heroui/react";
import CountUp from "react-countup";

interface TypeProps {
    percentages?: IPercentagesDashboard;
}

const Percentages = (props: TypeProps) => {
    const {
        percentages
    } = props;


    return (
      <div>
        <Card className="lg:p-2 w-full max-w-2xl text-utama">
          <CardBody className="gap-6">
            <div className="flex flex-col">
              <p className="font-semibold">
                Kehadiran
              </p>
              <div className="flex items-center gap-4">
                <Progress 
                  aria-label="progress" 
                  size="sm"
                  className="flex-1" 
                  color="danger" value={percentages?.presentPercentage} 
                />
                <div className="w-20">
                  <h2 className="font-bold text-xl">
                    <CountUp 
                      start={0}
                      end={Number(percentages?.presentPercentage)}
                      decimals={1}
                    /> %
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">
                Voting
              </p>
              <div className="flex items-center gap-4">
                <Progress 
                  aria-label="progress" 
                  size="sm"
                  className="flex-1" 
                  color="danger" value={percentages?.votePercentage} 
                />
                <div className="w-20">
                  <h2 className="font-bold text-xl">
                    <CountUp 
                      start={0}
                      end={Number(percentages?.votePercentage)}
                      decimals={1}
                    /> %
                  </h2>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    )
}


export default Percentages;