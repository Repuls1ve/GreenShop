import {FC, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Formik, Form, FormikHelpers} from 'formik'
import ReactModal from 'react-modal'

import {useAppSelector, useAppDispatch} from '../../hooks/redux'
import {register, login} from '../../store/slices/user-slice'

import {IUser} from '../../models/IUser'
import {RegistrationValidationSchema, LoginValidationSchema} from '../../utils/validation'

import TextField from '../TextField'
import Button from '../Button'

import styles from './styles.module.css'

type branch = 'Login' | 'Register'

interface AuthModalProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface AuthFormProps {
    setIsOpen: AuthModalProps['setIsOpen']
}

interface RegisterFormValues {
    username: IUser['username']
    email: IUser['email']
    password: string
    confirmPassword: string
}

interface LoginFormValues {
    email: IUser['email']
    password: string
}

const RegisterForm: FC<AuthFormProps> = ({setIsOpen}) => {
    const navigate = useNavigate()
    const {isAuth, isLoading, error} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        if (isAuth) {
            navigate('/profile')
            setIsOpen(false)
        }
    }, [isAuth, navigate, setIsOpen])

    const initialValues: RegisterFormValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const onSubmit = (values: RegisterFormValues, actions: FormikHelpers<RegisterFormValues>) => {
        dispatch(register({
            username: values.username,
            email: values.email,
            password: values.password
        }))
    }

    return (
        <Formik
        validationSchema={RegistrationValidationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
        >
            {({handleChange, values, errors}) => (
                <Form className={styles.form}>
                    <h3 className={styles.modalText}>Enter your email and password to register.</h3>
                    <TextField
                    containerClassName={styles.textField}
                    placeholder='Username'
                    onChange={handleChange('username')}
                    value={values.username}
                    />
                    <h3 className={styles.inputError}>{errors.username}</h3>
                    <TextField
                    containerClassName={styles.textField}
                    placeholder='Enter your email address'
                    onChange={handleChange('email')}
                    value={values.email}
                    />
                    <h3 className={styles.inputError}>{errors.email}</h3>
                    <TextField
                    containerClassName={styles.textField}
                    className={styles.inputPassword}
                    type='password'
                    placeholder='Password'
                    onChange={handleChange('password')}
                    value={values.password}
                    />
                    <h3 className={styles.inputError}>{errors.password}</h3>
                    <TextField
                    containerClassName={styles.textField}
                    className={styles.inputPassword}
                    type='password'
                    placeholder='Confirm Password'
                    onChange={handleChange('confirmPassword')}
                    value={values.confirmPassword}
                    />
                    <h3 className={styles.inputError}>{errors.confirmPassword}</h3>
                    <Button type='submit' className={styles.authButton}>Register</Button>
                    <h3 className={styles.inputError}>{isLoading ? 'Loading...' : error}</h3>
                    <div className={styles.separator}>Or register with</div>
                    <Button className={styles.serviceButton}>
                        <img className={styles.serviceIconGoogle} src='https://i.ibb.co/qDpRMyC/icon-google-color.png' alt='google'/>
                        <h3 className={styles.serviceButtonText}>Continue with Google</h3>
                    </Button>
                    <Button className={styles.serviceButton}>
                        <img className={styles.serviceIconFacebook} src='https://i.ibb.co/ZmJbZfz/icon-facebook-color.png' alt='facebook'/>
                        <h3 className={styles.serviceButtonText}>Continue with Facebook</h3>
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

const LoginForm: FC<AuthFormProps> = ({setIsOpen}) => {
    const navigate = useNavigate()
    const {isAuth, isLoading, error} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (isAuth) {
            navigate('/profile')
            setIsOpen(false)
        }
    }, [isAuth, navigate, setIsOpen])

    const initialValues: LoginFormValues = {
        email: '',
        password: ''
    }

    const onSubmit = (values: LoginFormValues, actions: FormikHelpers<LoginFormValues>) => {
        dispatch(login({
            email: values.email,
            password: values.password
        }))
    }

    return (
        <Formik
        validationSchema={LoginValidationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
        >
            {({handleChange, values, errors}) => (
                <Form className={styles.form}>
                    <h3 className={styles.modalText}>Enter your username and password to login.</h3>
                    <TextField
                    containerClassName={styles.textField}
                    placeholder='Enter your email address'
                    onChange={handleChange('email')}
                    value={values.email}
                    />
                    <h3 className={styles.inputError}>{errors.email}</h3>
                    <TextField
                    className={styles.inputPassword}
                    type='password'
                    placeholder='Password'
                    onChange={handleChange('password')}
                    value={values.password}
                    />
                    <h3 className={styles.inputError}>{errors.password}</h3>
                    <h3 className={styles.forgetPassword}>Forgot Password?</h3>
                    <Button type='submit' className={styles.authButton}>Login</Button>
                    <h3 className={styles.inputError}>{isLoading ? 'Loading...' : error}</h3>
                    <div className={styles.separator}>Or login with</div>
                    <Button className={styles.serviceButton}>
                        <img className={styles.serviceIconGoogle} src='https://i.ibb.co/qDpRMyC/icon-google-color.png' alt='google'/>
                        <h3 className={styles.serviceButtonText}>Login with Google</h3>
                    </Button>
                    <Button className={styles.serviceButton}>
                        <img className={styles.serviceIconFacebook} src='https://i.ibb.co/ZmJbZfz/icon-facebook-color.png' alt='facebook'/>
                        <h3 className={styles.serviceButtonText}>Login with Facebook</h3>
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

const AuthModal: FC<AuthModalProps> = ({isOpen, setIsOpen}) => {
    const [branch, setBranch] = useState<branch>('Login')

    const closeModal = () => setIsOpen(false)

    return (
        <ReactModal
        isOpen={isOpen}
        className={styles.modal}
        style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.4)'
            }
        }}
        >
            <div className={styles.modalContainer}>
                <div className={styles.modalClose}>
                    <img className={styles.modalCloseIcon} onClick={closeModal} src='https://i.ibb.co/WnsYZpr/icon-close.png' alt='close'/>
                </div>
                <div className={styles.modalContent}>
                    <div className={styles.modalBranches}>
                        <h2 className={styles.modalBranchesText}>
                            <span
                            onClick={() => setBranch('Login')} 
                            className={branch === 'Login' ? styles.modalBranchActive : styles.modalBranch}
                            >Login</span>
                            <span className={styles.modalDivider}> | </span>
                            <span
                            onClick={() => setBranch('Register')} 
                            className={branch === 'Register' ? styles.modalBranchActive : styles.modalBranch}
                            >Register</span>
                        </h2>
                    </div>
                    {branch === 'Login' ? <LoginForm setIsOpen={setIsOpen}/> : <RegisterForm setIsOpen={setIsOpen} />}
                </div>
            </div>
            <div className={styles.decorative}/>
        </ReactModal>
    )
}

export default AuthModal
