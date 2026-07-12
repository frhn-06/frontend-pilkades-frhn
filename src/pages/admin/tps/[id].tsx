import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import DetailTps from "@/compnents/views/Admin/DetailTps";




const PageAdminTps = () => {
    
    return (
        <DashboardLayout 
        title="Admin | Detail Tps"
        type="admin" 
        headerTitle="Detail Tps" 
        headerSubtitle="this is TPS Detail"
        >
            <DetailTps />
        </DashboardLayout>
    )
}

export default PageAdminTps;