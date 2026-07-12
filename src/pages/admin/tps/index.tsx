import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import Tps from "@/compnents/views/Admin/Tps";




const PageAdminTps = () => {
    
    return (
        <DashboardLayout 
        title="Admin | Tps" 
        type="admin" 
        headerTitle="TPS List" 
        headerSubtitle="this is TPS list"
        >
          <Tps />
        </DashboardLayout>
    )
}

export default PageAdminTps;