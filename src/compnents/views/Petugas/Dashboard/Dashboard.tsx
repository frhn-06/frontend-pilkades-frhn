import { IDashboardPetugas } from "@/types/dashboard"
import Info from "./Info";
import Statistics from "./Statistics";
import Percentages from "./Percentages";

interface TypeProps {
    data: IDashboardPetugas;
}

const Dashboard = (props: TypeProps) => {
    const {
        data
    } = props;

    return (
        <div className="flex flex-col gap-8">

          <Info election={data?.election} tps={data?.tps} />
          
          <Statistics statistics={data?.statistics} />

          <Percentages percentages={data?.percentages} />

        </div>
    )
}

export default Dashboard;