import * as yup from 'yup';


const schemaTps = yup.object({
    name: yup.string().required("Nama TPS wajib diisi"),
    alamat: yup.string().required("Alamat TPS wajib diisi"),
    rt: yup.string().required("Rt wajib diisi"),
    rw: yup.string().required("Rw TPS wajib diisi"),
});

export default schemaTps;