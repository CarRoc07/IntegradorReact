import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
    email: Yup.string()
        .matches(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i, 'Email no valido')
        .required('Obligatorio'),
    password: Yup.string()
        .min(8, 'Mínimo de caracteres: 8')
        .required('Obligatorio'),
})

export const registerValidationSchema = Yup.object({
    email: Yup.string()
        .matches(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i, 'Email no valido')
        .required('Obligatorio'),
    password: Yup.string()
    .min(8, 'Mínimo de caracteres: 8')
    .required('Obligatorio'),
})

