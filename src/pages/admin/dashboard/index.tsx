import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import EmptyElection from "@/compnents/ui/EmptyElection";
import Dashboard from "@/compnents/views/Admin/Dashboard";
import DashboardSerivce from "@/services/dashboard.service";
import { Spinner } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";

const useDashboard = () => {
    const getDashboard = async () => {
        const {data} = await DashboardSerivce.admin();
        return data;
    }

    const {data: dataDashboard, isLoading:isLoadingDashboard, isError: isErrorDashboard, error:errorDashboard} = useQuery({
        queryKey: ["Dashboard-admin"],
        queryFn: getDashboard
    })

    return {
        dataDashboard,
        isLoadingDashboard,
        isErrorDashboard,
        errorDashboard,
    }
}



const PageAdminDashboard = () => {
    const {
      dataDashboard,
      isLoadingDashboard,
      isErrorDashboard,
      errorDashboard,
    } = useDashboard();

    return (
        <DashboardLayout 
          title="Dashboard" 
          type="admin" 
          headerTitle="Dashboard" 
          headerSubtitle="Pantau ringkasan statistik dan perkembangan proses pemungutan suara secara keseluruhan."
        >
          {isLoadingDashboard ? (
            <div className="w-full min-h-screen">
              <div className="w-fit mx-auto my-12">
                <Spinner color="danger" />
              </div>
            </div>
          ) : isErrorDashboard ? (
            <div className="w-full min-h-screen">
              {errorDashboard?.message === "Election belum ada / belum dibuat" ? (
                <EmptyElection 
                  title="Dashboard belum dapat ditampilkan karena Election belum dibuat."
                  textContent="Buat Election terlebih dahulu untuk mulai mengelola proses pemilihan dan melihat statistik pemungutan suara."
                />
              ) : (
                <div>
                  <h1 className="text-5xl font-bold text-utama">
                    Error 
                  </h1>
                  <p>
                    {errorDashboard?.message}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <Dashboard data={dataDashboard?.data} />
          )}
        </DashboardLayout>
    )
}

export default PageAdminDashboard;