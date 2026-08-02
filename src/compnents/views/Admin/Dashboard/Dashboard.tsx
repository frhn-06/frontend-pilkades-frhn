import { IDashboardAdmin } from "@/types/dashboard"
import Info from "./Info";
import Statistics from "./Statistics";
import Percentages from "./Percentages";

interface TypeProps {
    data: IDashboardAdmin;
}

const Dashboard = (props: TypeProps) => {
    const {
        data
    } = props;

    return (
        <div className="flex flex-col gap-8">

          <Info election={data?.election} />
          
          <Statistics statistics={data?.statistics} />

          <Percentages percentages={data?.percentages} />

        </div>
    )
}

export default Dashboard;