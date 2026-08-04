import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import DetailTps from "@/compnents/views/Admin/DetailTps";




const PageAdminTps = () => {
    
    return (
        <DashboardLayout 
        title="Edit TPS"
        type="admin" 
        headerTitle="Edit TPS" 
        headerSubtitle="Perbarui informasi Tempat Pemungutan Suara."
        >
            <DetailTps />
        </DashboardLayout>
    )
}

export default PageAdminTps;