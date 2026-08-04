import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import Absensi from "@/compnents/views/Petugas/Absensi";




const PagePetugasAbsensi = () => {
    
    return (
        <DashboardLayout 
            title="Absensi & Token" 
            type="petugas" 
            headerTitle="Absensi & Token" 
            headerSubtitle="Catat kehadiran pemilih dan buat token sebagai akses untuk memberikan suara."
        >
          <Absensi />
        </DashboardLayout>
    )
}

export default PagePetugasAbsensi;