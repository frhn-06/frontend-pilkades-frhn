import DashboardLayout from "@/compnents/layouts/DashboardLayout";


const PagePetugasDashboard = () => {
    return (
        <DashboardLayout 
        title="Pilkades | Petugas" 
        type="petugas" 
        headerTitle="Petugas Dashboard" 
        headerSubtitle="monitoring dashboard by petugas"
        >
          <div className="h-1000 text-utama">
            petugas dashboard
          </div>
        </DashboardLayout>
    )
}

export default PagePetugasDashboard;