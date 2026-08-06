import * as yup from "yup"

const schemaNameDanEmail = yup.object({
    identifier: yup.string().trim().min(1).required("Nama atau Email harus diisi")
})

export {schemaNameDanEmail}