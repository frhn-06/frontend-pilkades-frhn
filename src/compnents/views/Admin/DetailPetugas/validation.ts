import * as yup from 'yup'

const schemaPetugas = yup.object({
    name: yup.string().required("Nama harus diisi"),
    email: yup.string().required("Email harus diisi"),
    tpsId: yup.string().required("TPS harus diisi"),
})

export {schemaPetugas}