import { IPercentagesDashboard } from "@/types/dashboard"
import { Card, CardBody } from "@heroui/react";
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
            <div className="flex flex-col gap-2">
              <p className="font-semibold">
                Kehadiran
              </p>
              <div className="flex items-center gap-4">
                <div className=" relative flex-1 h-3 rounded-lg bg-gray-400">
                  <div className="absolute top-0 bottom-0 bg-red-500 rounded-lg" style={
                    {width: `${percentages?.presentPercentage}%`}
                  } />
                </div>
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
            <div className="flex flex-col gap-2">
              <p className="font-semibold">
                Voting
              </p>
              <div className="flex items-center gap-4">
                <div className=" relative flex-1 h-3 rounded-lg bg-gray-400">
                  <div className="absolute top-0 bottom-0 bg-red-500 rounded-lg" style={
                    {width: `${percentages?.votePercentage}%`}
                  } />
                </div>
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