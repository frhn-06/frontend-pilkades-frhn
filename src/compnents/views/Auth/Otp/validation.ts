import * as yup from 'yup';

const schemaOtp = yup.object({
    otp: yup.string().required()
})
export {schemaOtp}