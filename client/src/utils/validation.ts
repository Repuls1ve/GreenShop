import * as yup from 'yup'

export const RegistrationValidationSchema = yup.object().shape({
    username: yup
        .string()
        .matches(/^[a-zA-Z0-9_\-.]+$/, 'Invalid characters used')
        .min(5, ({min}) => `Username must contain at least ${min} characters`)
        .required('Username is required field'),
    email: yup
        .string()
        .email('Please check your email')
        .required('Email is required field'),
    password: yup
        .string()
        .matches(/^[a-zA-Z0-9]+$/, 'Password can only contain Latin letters and numbers.')
        .min(8, ({min}) => `Password must contain at least ${min} characters`)
        .required('Password is required field'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Password doesn\'t match')
        .required('Confirm your password')
})

export const LoginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please check your email')
        .required('Email is required field'),
    password: yup
        .string()
        .matches(/^[a-zA-Z0-9]+$/, 'Password can only contain Latin letters and numbers.')
        .min(8, ({min}) => `Password must contain at least ${min} characters`)
        .required('Password is required field'),
})