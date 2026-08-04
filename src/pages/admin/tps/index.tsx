import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import Tps from "@/compnents/views/Admin/Tps";




const PageAdminTps = () => {
    
    return (
        <DashboardLayout 
            title="Manajemen TPS" 
            type="admin" 
            headerTitle="Manajemen TPS" 
            headerSubtitle="Kelola data Tempat Pemungutan Suara (TPS) yang akan digunakan selama proses pemilihan."
        >
          <Tps />
        </DashboardLayout>
    )
}

export default PageAdminTps;