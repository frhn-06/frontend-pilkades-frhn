import * as yup from 'yup'

const schemaVoter = yup.object({
    name: yup.string().trim().required("Nama harus diisi"),
    info: yup.string().trim().optional(),
    nik: yup.string().trim().max(16, "NIK harus 16 karakter").optional(),
})

export {schemaVoter}