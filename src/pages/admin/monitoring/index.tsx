import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import AlertStatusElection from "@/compnents/ui/AlertStatusElection";
import EmptyElection from "@/compnents/ui/EmptyElection";
import Monitoring from "@/compnents/views/Admin/Monitoring";
import MonitoringService from "@/services/monitoring.service";
import { Spinner } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";

const useMonitoring = () => {
    const getMonitoring = async () => {
        const {data} = await MonitoringService.admin();
        return data;
    }

    const {data: dataMonitoring, isLoading:isLoadingMonitoring, isError: isErrorMonitoring, error:errorMonitoring} = useQuery({
        queryKey: ["Monitoring-admin"],
        queryFn: getMonitoring
    })

    return {
        dataMonitoring,
        isLoadingMonitoring,
        isErrorMonitoring,
        errorMonitoring,
    }
}



const PageAdminMonitoring = () => {
    const {
      dataMonitoring,
      isLoadingMonitoring,
      isErrorMonitoring,
      errorMonitoring,
    } = useMonitoring();

    return (
        <DashboardLayout 
          title="Monitoring Pemungutan Suara" 
          type="admin" 
          headerTitle="Monitoring Pemungutan Suara" 
          headerSubtitle="Pantau perkembangan pemungutan suara dan perolehan suara setiap kandidat secara langsung."
        >
          {isLoadingMonitoring ? (
            <div className="w-full min-h-screen">
              <div className="w-fit mx-auto my-12">
                <Spinner color="danger" />
              </div>
            </div>
          ) : isErrorMonitoring ? 
            errorMonitoring?.message === "Status Election tidak mengizinkan untuk melakukan aksi ini." ? (
              <div className="w-full min-h-screen">
                <AlertStatusElection
                  title="Pemungutan suara belum dimulai"
                  textContent="Halaman ini baru dapat digunakan setelah status Election berubah menjadi Ongoing atau Finished."
                />
              </div>
            ) : (
            <div className="w-full min-h-screen">
              {errorMonitoring?.message === "Election belum ada / belum dibuat" ? (
                <EmptyElection 
                  title="Belum ada Election yang aktif."
                  textContent="Monitoring hasil pemilihan akan tersedia setelah Election dibuat sehingga proses pemungutan suara dapat dipantau dari TPS Anda."
                />
              ) : (
                <div>
                  <h1 className="text-5xl font-bold text-utama">
                    Error 
                  </h1>
                  <p>
                    {errorMonitoring?.message}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <Monitoring data={dataMonitoring?.data} />
          )}
        </DashboardLayout>
    )
}

export default PageAdminMonitoring;