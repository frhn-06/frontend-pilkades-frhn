import * as yup from 'yup';


const schemaLogin = yup.object({
    identifier: yup.string().required("Nama atau Email harus diisi"),
    password: yup.string().required("password harus diisi")
});

export {schemaLogin}