import { IDashboardPetugas } from "@/types/dashboard"
import Info from "./Info";
import Statistics from "./Statistics";
import Percentages from "./Percentages";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { CustomSession } from "@/libs/axios";
import { getSession } from "next-auth/react";
import { socket } from "@/libs/socket";

interface TypeProps {
    data: IDashboardPetugas;
}

const Dashboard = (props: TypeProps) => {
    const {
        data
    } = props;

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

          <Info election={data?.election} tps={data?.tps} />
          
          <Statistics statistics={data?.statistics} />

          <Percentages percentages={data?.percentages} />

        </div>
    )
}

export default Dashboard;