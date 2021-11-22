import * as yup from 'yup'

const phoneRegExp = /^\+?[0-9]{3}-?[0-9]{6,12}$/

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

export const AccountDetailsValidationSchema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^[a-zA-Z.,'\- ]+$/, 'Please enter a valid first name'),
    lastName: yup
        .string()
        .matches(/^[a-zA-Z.,'\- ]+$/, 'Please enter a valid last name'),
    phone: yup
        .string()
        .matches(phoneRegExp, 'Please enter a valid phone number'),
    currentPassword: yup
        .string()
        .matches(/^[a-zA-Z0-9]{8,}$/, 'Check your password')
        .when('newPassword', {
            is: (newPassword: string) => newPassword,
            then: yup.string().required('Current password is required when setting new password')
        }),
    newPassword: yup
        .string()
        .matches(/^[a-zA-Z0-9]+$/, 'Password can only contain Latin letters and numbers.')
        .min(8, ({min}) => `Password must contain at least ${min} characters`)
        .when('currentPassword', {
            is: (currentPassword: string) => currentPassword,
            then: yup.string().required('New password is required')
        }),
    confirmNewPassword: yup
        .string()
        .when('newPassword', {
            is: (newPassword: string) => newPassword,
            then: yup.string().required('Confirm your password')
        })
        .oneOf([yup.ref('newPassword'), null], 'Password doesn\'t match')
}, [['currentPassword', 'newPassword']])