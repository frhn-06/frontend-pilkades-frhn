import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import DetailPetugas from "@/compnents/views/Admin/DetailPetugas";

const PageAdminDetailPetugas = () => {  
      return (
        <DashboardLayout 
          title="Detail petugas | Admin" 
          type="admin" 
          headerTitle="Daftar Petugas" 
          headerSubtitle="this is Petugas"
        >
            <DetailPetugas />  
        </DashboardLayout>
      )
    
}

export default PageAdminDetailPetugas;