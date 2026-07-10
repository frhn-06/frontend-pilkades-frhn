import AuthLayout from "@/compnents/layouts/AuthLayout";
import Login from "@/compnents/views/Auth/Login";

const PageLogin = () => {
    return (
        <AuthLayout title="Masuk">
          <Login />
        </AuthLayout> 
    )
}

export default PageLogin;