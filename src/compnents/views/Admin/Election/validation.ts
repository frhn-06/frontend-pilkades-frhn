
import * as yup from 'yup'

const schemaElection = yup.object({
    name: yup.string().required("Nama election harus diisi"),
    desa: yup.string().required("Alamat desa harus diisi"),
    kecamatan: yup.string().required("Kecamatan harus diisi"),
    kabupatenKota: yup.string().required("Kabupaten / Kota harus diisi"),
    provinsi: yup.string().required("Provinsi harus diisi"),
    description: yup.string(),
    logo: yup.string(),
    startAt: yup.date().required("Waktu mulai harus diisi"),
    endAt: yup.date().required("Waktu akhir harus diisi"),
    status: yup.string().required("Status harus diisi"),
})

export type IElectionForm = yup.InferType<typeof schemaElection>;

export {schemaElection}
