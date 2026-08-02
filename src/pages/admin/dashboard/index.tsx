import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import Dashboard from "@/compnents/views/Admin/Dashboard";
import DashboardSerivce from "@/services/dashboard.service";
import { Spinner } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";


const useDashboard = () => {
    const getDashboard = async () => {
        const {data} = await DashboardSerivce.admin();
        return data;
    }

    const {data: dataDashboard, isLoading:isLoadingDashboard, isError: isErrorDashboard, error:errorDashboard, refetch:refetchDashboard, isRefetching: isRefetchingDashboard} = useQuery({
        queryKey: ["Dashboard-admin"],
        queryFn: getDashboard
    })

    return {
        dataDashboard,
        isLoadingDashboard,
        isErrorDashboard,
        errorDashboard,
        refetchDashboard,
        isRefetchingDashboard
    }
}



const PageAdminDashboard = () => {
    const {
      dataDashboard,
      isLoadingDashboard,
      isErrorDashboard,
      errorDashboard,
      isRefetchingDashboard
    } = useDashboard();

    return (
        <DashboardLayout 
        title="Admin | Pilkades" 
        type="admin" 
        headerTitle="Admin Dashboard" 
        headerSubtitle="Pantau kondisi pemungutan suara"
        >
          {isLoadingDashboard || isRefetchingDashboard ? (
            <div className="w-full min-h-screen flex justify-center items-center">
              <Spinner color="danger" />
            </div>
          ) : isErrorDashboard ? (
            <div className="w-full min-h-screen flex flex-col justify-center items-center">
              <h1 className="text-5xl font-bold text-utama">
                Error 
              </h1>
              <p>
                {errorDashboard?.message}
              </p>
            </div>
          ) : (
            <Dashboard data={dataDashboard?.data} />
          )}
        </DashboardLayout>
    )
}

export default PageAdminDashboard;