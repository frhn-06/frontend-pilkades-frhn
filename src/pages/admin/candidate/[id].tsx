import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import DetailCandidate from "@/compnents/views/Admin/DetailCandidate";

const PageAdminDetailPetugas = () => {  
      return (
        <DashboardLayout 
          title="Detail kandidat | Admin" 
          type="admin" 
          headerTitle="Kandidat" 
          headerSubtitle="this is Candidate"
        >
            <DetailCandidate />  
        </DashboardLayout>
      )
    
}

export default PageAdminDetailPetugas;