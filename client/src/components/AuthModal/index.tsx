import {FC, useState} from 'react'
import ReactModal from 'react-modal'

import TextField from '../TextField'
import Button from '../Button'

import Close from '../../assets/icons/icon-close.png'
import Google from '../../assets/icons/icon-google-color.png'
import Facebook from '../../assets/icons/icon-facebook-color.png'

import styles from './styles.module.css'

interface AuthModalProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type branch = 'Login' | 'Register'

const RegisterForm: FC = () => {
    return (
        <form className={styles.form} onSubmit={e => e.preventDefault()}>
            <h3 className={styles.modalText}>Enter your email and password to register.</h3>
            <TextField
            containerClassName={styles.textField}
            placeholder='Username'
            />
            <TextField
            containerClassName={styles.textField}
            placeholder='Enter your email address'
            />
            <TextField
            containerClassName={styles.textField}
            className={styles.inputPassword}
            type='password'
            placeholder='Password'
            />
            <TextField
            containerClassName={styles.textField}
            className={styles.inputPassword}
            type='password'
            placeholder='Confirm Password'
            />
            <Button className={styles.authButton}>Register</Button>
            <div className={styles.separator}>Or register with</div>
            <Button className={styles.serviceButton}>
                <img className={styles.serviceIconGoogle} src={Google} alt='google'/>
                <h3 className={styles.serviceButtonText}>Continue with Google</h3>
            </Button>
            <Button className={styles.serviceButton}>
                <img className={styles.serviceIconFacebook} src={Facebook} alt='facebook'/>
                <h3 className={styles.serviceButtonText}>Continue with Facebook</h3>
            </Button>
        </form>
    )
}

const LoginForm: FC = () => {
    return (
        <form className={styles.form} onSubmit={e => e.preventDefault()}>
            <h3 className={styles.modalText}>Enter your username and password to login.</h3>
            <TextField
            containerClassName={styles.textField}
            placeholder='Enter your email address'
            />
            <TextField
            className={styles.inputPassword}
            type='password'
            placeholder='Password'
            />
            <h3 className={styles.forgetPassword}>Forgot Password?</h3>
            <Button className={styles.authButton}>Login</Button>
            <div className={styles.separator}>Or login with</div>
            <Button className={styles.serviceButton}>
                <img className={styles.serviceIconGoogle} src={Google} alt='google'/>
                <h3 className={styles.serviceButtonText}>Login with Google</h3>
            </Button>
            <Button className={styles.serviceButton}>
                <img className={styles.serviceIconFacebook} src={Facebook} alt='facebook'/>
                <h3 className={styles.serviceButtonText}>Login with Facebook</h3>
            </Button>
        </form>
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
                    <img className={styles.modalCloseIcon} onClick={closeModal} src={Close} alt='close'/>
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
                    {branch === 'Login' ? <LoginForm /> : <RegisterForm />}
                </div>
            </div>
            <div className={styles.decorative}/>
        </ReactModal>
    )
}

export default AuthModal
