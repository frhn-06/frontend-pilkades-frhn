import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import Petugas from "@/compnents/views/Admin/Petugas";




const PageAdminPetugas = () => {
    
    return (
        <DashboardLayout 
        title="Manajemen Petugas" 
        type="admin" 
        headerTitle="Manajemen Petugas" 
        headerSubtitle="Kelola akun petugas yang bertugas mengelola proses pemungutan suara di setiap TPS."
        >
          <Petugas />
        </DashboardLayout>
    )
}

export default PageAdminPetugas;