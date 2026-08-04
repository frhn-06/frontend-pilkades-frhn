import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import DetailVoter from "@/compnents/views/Petugas/DetailVoter";

const PagePetugasDetailVoter = () => {  
      return (
        <DashboardLayout 
          title="Edit Pemilih" 
          type="petugas" 
          headerTitle="Edit Pemilih" 
          headerSubtitle="Perbarui informasi pemilih yang telah diundang."
        >
            <DetailVoter />
        </DashboardLayout>
      )
    
}

export default PagePetugasDetailVoter;