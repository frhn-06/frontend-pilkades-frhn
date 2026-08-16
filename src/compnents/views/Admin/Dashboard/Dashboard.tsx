import { IDashboardAdmin } from "@/types/dashboard"
import Info from "./Info";
import Statistics from "./Statistics";
import Percentages from "./Percentages";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import useDashboard from "./useDashboard";
import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { CustomSession } from "@/libs/axios";
import { socket } from "@/libs/socket";
import { getSession } from "next-auth/react";

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

    const queryClient = useQueryClient();
    useEffect(() => {
      const connectSocket = async () => {
        const session : CustomSession | null = await getSession();
        if(!session || !session.accessToken) return;

        socket.auth = {
          token: session.accessToken,
        }

        socket.on("connect", () => console.log(socket.id));

        socket.on("vote:created", () => {
          queryClient.invalidateQueries({
            queryKey: ["Monitoring-petugas"]
          })
        })
        
        socket.connect();
      }

      connectSocket();

      return () => {
        socket.off("connect");
        socket.off("vote:created")
        socket.disconnect();
      }
    },[])

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