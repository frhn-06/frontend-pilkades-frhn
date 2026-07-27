import * as yup from 'yup'

const schemaMemebers = {
    name: yup.string().required("Nama kandidat harus diisi"),
    position: yup.string().required("Posisi kandidat harus diisi"),
    order: yup.number().required("Order harus diisi"),
    img: yup.string()
}

const schemaCandidate = yup.object({
    nomor: yup.string().required("Nomor urut kandidat harus diisi"),
    vision: yup.string().required("Visi harus diisi"),
    mission: yup.string().required("Misi harus diisi"),
    img: yup.string().required("Foto kandidat harus diisi"),
    members: yup.array(yup.object(schemaMemebers)).min(1).required("Kandidat harus diisi")
})

export default schemaCandidate;