import AuthLayout from "@/compnents/layouts/AuthLayout";
import ResetPassword from "@/compnents/views/Auth/ResetPassword";

const PageResetPassword = () => {
    return (
        <AuthLayout title="Reset Password">
          <ResetPassword />
        </AuthLayout>        
    )
}

export default PageResetPassword;