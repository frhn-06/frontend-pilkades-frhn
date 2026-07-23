import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import Petugas from "@/compnents/views/Admin/Petugas";




const PageAdminPetugas = () => {
    
    return (
        <DashboardLayout 
        title="Admin | Petugas" 
        type="admin" 
        headerTitle="Daftar Petugas" 
        headerSubtitle="this is Petugas list"
        >
          <Petugas />
        </DashboardLayout>
    )
}

export default PageAdminPetugas;