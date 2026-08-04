import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import DetailPetugas from "@/compnents/views/Admin/DetailPetugas";

const PageAdminDetailPetugas = () => {  
      return (
        <DashboardLayout 
          title="Edit Petugas" 
          type="admin" 
          headerTitle="Edit Petugas" 
          headerSubtitle="Perbarui informasi mengenai petugas ini."
        >
            <DetailPetugas />  
        </DashboardLayout>
      )
    
}

export default PageAdminDetailPetugas;