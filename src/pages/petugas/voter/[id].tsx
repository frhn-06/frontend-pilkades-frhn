import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import DetailVoter from "@/compnents/views/Petugas/DetailVoter";

const PagePetugasDetailVoter = () => {  
      return (
        <DashboardLayout 
          title="Detail voter | Petugas" 
          type="petugas" 
          headerTitle="Data Voter" 
          headerSubtitle="this is Voter"
        >
            <DetailVoter />
        </DashboardLayout>
      )
    
}

export default PagePetugasDetailVoter;