import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import Candidate from "@/compnents/views/Admin/Candidate";




const PageAdminCandidate = () => {
    
    return (
        <DashboardLayout 
        title="Manajemen Kandidat" 
        type="admin" 
        headerTitle="Manajemen Kandidat" 
        headerSubtitle="Kelola data pasangan calon yang akan mengikuti proses pemilihan."
        >
          <Candidate />
        </DashboardLayout>
    )
}

export default PageAdminCandidate;