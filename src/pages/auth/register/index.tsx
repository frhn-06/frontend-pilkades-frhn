import AuthLayout from "@/compnents/layouts/AuthLayout";
import Register from "@/compnents/views/Auth/Register";

const PageRegister = () => {
    return (
        <AuthLayout title="Daftar">
          <Register />
        </AuthLayout>        
    )
}

export default PageRegister;