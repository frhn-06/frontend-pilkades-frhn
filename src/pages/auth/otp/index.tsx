import AuthLayout from "@/compnents/layouts/AuthLayout";
import Otp from "@/compnents/views/Auth/Otp";

const PageOTP = () => {
    return (
        <AuthLayout title="Verifikasi OTP">
          <Otp />
        </AuthLayout>        
    )
}

export default PageOTP;