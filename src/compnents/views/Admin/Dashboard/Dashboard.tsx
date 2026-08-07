import { IDashboardAdmin } from "@/types/dashboard"
import Info from "./Info";
import Statistics from "./Statistics";
import Percentages from "./Percentages";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import useDashboard from "./useDashboard";
import { Spinner } from "@heroui/react";

interface TypeProps {
    data: IDashboardAdmin;
}

const Dashboard = (props: TypeProps) => {
    const {
        data
    } = props;

    const {
      onDownloadPDF,
      isPendingDownloadPDF
    } = useDashboard();

    return (
        <div className="flex flex-col gap-8">

          <Info election={data?.election} />
        
          <Statistics statistics={data?.statistics} />

          <Percentages percentages={data?.percentages} />

          <div>
            <ButtonSolid minWidth onPress={onDownloadPDF} isDisabled={isPendingDownloadPDF || data.election?.status !== "FINISHED"}>
              {isPendingDownloadPDF ? <Spinner color="default" size="sm" /> : "Download PDF"}
            </ButtonSolid>
            {data.election?.status !== "FINISHED" && (
              <p className="text-danger text-sm mt-2">
                Tidak dapat mengunduh PDF Hasil Pemungutan Suara selama status election belum selesai / FINISHED
              </p>
            )}
          </div>
        </div>
    )
}

export default Dashboard;