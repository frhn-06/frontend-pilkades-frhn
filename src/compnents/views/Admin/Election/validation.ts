
import * as yup from 'yup'

const schemaElection = yup.object({
    name: yup.string().required("Nama election harus diisi"),
    organizerName: yup.string(),
    organizerInfo: yup.string(),
    description: yup.string(),
    startAt: yup.date().required("Waktu mulai harus diisi"),
    endAt: yup.date().required("Waktu akhir harus diisi"),
})

export type IElectionForm = yup.InferType<typeof schemaElection>;

const schemaStatus = yup.object({
    status: yup.string().required("Status election harus diisi")
})

export {schemaElection, schemaStatus}
