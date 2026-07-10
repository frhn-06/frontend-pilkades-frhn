import * as yup from 'yup'

const schemaRegister = yup.object({
    email: yup.string().email("Email tidak valid").required("Email harus diisi"),
    name: yup.string().min(3, "Nama minimal 3 huruf").required("Nama harus diisi"),
    password: yup.string().test("angka", "Password harus meengandung angka", (value) => {
        if(!value) return false;
        return /\d/.test(value);
    })
    .test("kapital", "Password harus mengandung huruf kapital", (value) => {
        if(!value) return false;
        return /[A-Z]/.test(value);
    }).required("Password harus diisi"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Konfirmasi Password tidak sesuai").required("Konfirmasi Password harus diisi")
})

export {schemaRegister}