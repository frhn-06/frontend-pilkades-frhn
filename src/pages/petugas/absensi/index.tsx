import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import Absensi from "@/compnents/views/Petugas/Absensi";




const PagePetugasAbsensi = () => {
    
    return (
        <DashboardLayout 
            title="Absensi | Petugas" 
            type="petugas" 
            headerTitle="Daftar Voter Absesnsi" 
            headerSubtitle="this is voter absensi list"
        >
          <Absensi />
        </DashboardLayout>
    )
}

export default PagePetugasAbsensi;