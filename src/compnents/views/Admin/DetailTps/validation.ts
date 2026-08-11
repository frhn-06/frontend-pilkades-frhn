import * as yup from 'yup';


const schemaTps = yup.object({
    name: yup.string().required("Nama TPS wajib diisi"),
    location: yup.string().required("Lokasi TPS wajib diisi"),
});

export default schemaTps;