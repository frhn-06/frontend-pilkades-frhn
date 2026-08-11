
import * as yup from 'yup'

const schemaElection = yup.object({
    name: yup.string().required("Nama election harus diisi"),
    organizerName: yup.string(),
    organizerInfo: yup.string(),
    description: yup.string(),
    logo: yup.string(),
    startAt: yup.date().required("Waktu mulai harus diisi"),
    endAt: yup.date().required("Waktu akhir harus diisi"),
    status: yup.string().required("Status harus diisi"),
})

export type IElectionForm = yup.InferType<typeof schemaElection>;

export {schemaElection}
