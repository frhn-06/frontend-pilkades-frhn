import AuthLayout from "@/compnents/layouts/AuthLayout";
import Register from "@/compnents/views/Auth/Register";

const PageRegister = () => {
    return (
        <AuthLayout title="daftar">
          <Register />
        </AuthLayout>        
    )
}

export default PageRegister;