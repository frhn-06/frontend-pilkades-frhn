import DashboardLayout from "@/compnents/layouts/DashboardLayout";


const PageAdminDashboard = () => {
    return (
        <DashboardLayout 
        title="Admin | Pilkades" 
        type="admin" 
        headerTitle="Admin Dashboard" 
        headerSubtitle="monitoring dashboard by admin"
        >
          <div className="h-1000">
            admin dashboard
          </div>
        </DashboardLayout>
    )
}

export default PageAdminDashboard;