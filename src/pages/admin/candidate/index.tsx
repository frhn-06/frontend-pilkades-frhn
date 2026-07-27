import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import Candidate from "@/compnents/views/Admin/Candidate";




const PageAdminCandidate = () => {
    
    return (
        <DashboardLayout 
        title="Kandidat Calon | Admin" 
        type="admin" 
        headerTitle="Daftar Kandidat Calon" 
        headerSubtitle="this is Candiate list"
        >
          <Candidate />
        </DashboardLayout>
    )
}

export default PageAdminCandidate;