import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import Voter from "@/compnents/views/Petugas/Voter";




const PagePetugasVoter = () => {
    
    return (
        <DashboardLayout 
            title="Data Pemilih" 
            type="petugas" 
            headerTitle="Data Pemilih"
            headerSubtitle="Kelola daftar pemilih yang terdaftar pada TPS untuk mendukung proses pemungutan suara."
        >
          <Voter />
        </DashboardLayout>
    )
}

export default PagePetugasVoter;