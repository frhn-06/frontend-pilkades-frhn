import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import DetailCandidate from "@/compnents/views/Admin/DetailCandidate";

const PageAdminDetailPetugas = () => {  
      return (
        <DashboardLayout 
          title="Edit Kandidat" 
          type="admin" 
          headerTitle="Edit Kandidat" 
          headerSubtitle="Perbarui informasi pasangan calon yang telah terdaftar."
        >
            <DetailCandidate />  
        </DashboardLayout>
      )
    
}

export default PageAdminDetailPetugas;