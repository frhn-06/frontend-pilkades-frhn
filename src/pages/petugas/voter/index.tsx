import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import Voter from "@/compnents/views/Petugas/Voter";




const PagePetugasVoter = () => {
    
    return (
        <DashboardLayout 
            title="Voter | Petugas" 
            type="petugas" 
            headerTitle="Daftar Voter" 
            headerSubtitle="this is voter list"
        >
          <Voter />
        </DashboardLayout>
    )
}

export default PagePetugasVoter;