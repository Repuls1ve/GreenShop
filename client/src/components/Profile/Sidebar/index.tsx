import {FC} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

import {useAppDispatch} from '../../../hooks/redux'
import {logout} from '../../../store/slices/user-slice'

import Button from '../../Button'

import styles from './styles.module.css'

const ProfileSidebar: FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const switchActive = ({isActive}: {
        isActive: boolean
    }) => isActive ? styles.navLinkActive : styles.navLink

    const onLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <nav className={styles.sidebar}>
            <h3 className={styles.title}>My Account</h3>
            <NavLink end to='/profile' className={switchActive}>Account Details</NavLink>
            <NavLink to='/profile/address' className={switchActive}>Address</NavLink>
            <NavLink to='/profile/orders' className={switchActive}>Orders</NavLink>
            <NavLink to='/profile/wishlist' className={switchActive}>Wishlish</NavLink>
            <NavLink to='/profile/reports' className={switchActive}>Reports</NavLink>
            <NavLink to='/profile/downloads' className={switchActive}>Downloads</NavLink>
            <NavLink to='/profile/support' className={switchActive}>Support</NavLink>
            <div className={styles.hr}/>
            <Button onClick={onLogout} className={styles.logout}>Logout</Button>
        </nav>
    )
}

export default ProfileSidebar
