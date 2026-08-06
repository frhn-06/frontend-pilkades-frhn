import AuthLayout from "@/compnents/layouts/AuthLayout";
import ForgetPassword from "@/compnents/views/Auth/ForgetPassword";

const PageForgetPassword = () => {
    return (
        <AuthLayout title="Lupa Password">
          <ForgetPassword />
        </AuthLayout>        
    )
}

export default PageForgetPassword;