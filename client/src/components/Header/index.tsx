import {FC, useState} from 'react'
import {NavLink, Link} from 'react-router-dom'

import {useAppSelector} from '../../hooks/redux'

import Button from '../Button'
import AuthModal from '../AuthModal'

import styles from './styles.module.css'

const Header: FC = () => {
    const {isAuth, isRefreshLoading, user} = useAppSelector(state => state.user)

    const [isModalOpen, setModalOpen] = useState(false)
    const openModal = () => setModalOpen(true)

    const switchActive = ({isActive}: {
        isActive: boolean
    }) => isActive ? styles.activeLink : styles.link
    
    const switchDynamicActive = (regex: RegExp) => {
        return regex.test(window.location.pathname) ? styles.activeLink : styles.link
    }
    return (
        <>
        <AuthModal
        isOpen={isModalOpen}
        setIsOpen={setModalOpen}
        />
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.company}>
                    <img className={styles.logo} src='https://i.ibb.co/vqqN18b/icon-logo.png' alt='logo'/>
                    <h2 className={styles.name}>GreenShop</h2>
                </div>
                <nav className={styles.nav}>
                    <NavLink to='/' className={switchActive}>Home</NavLink>
                    <NavLink to='shop' className={() => switchDynamicActive(/\/shop(.+)?/)}>Shop</NavLink>
                    <NavLink to='plant-care' className={switchActive}>Plant Care</NavLink>
                    <NavLink to='blogs' className={switchActive}>Blogs</NavLink>
                </nav>
                <div className={styles.login}>
                    <img className={styles.search} src='https://i.ibb.co/QPJXwBv/icon-search.png' alt='search'/>
                    <img className={styles.cart} src='https://i.ibb.co/R08dtHQ/icon-cart.png' alt='cart'/>
                    {
                    isRefreshLoading ?
                    <h3 className={styles.username}>Loading..</h3>
                    :
                    isAuth ?
                    <Link to='/profile' className={styles.username}>{user?.username}</Link>
                    :
                    <Button
                    onClick={openModal}
                    >
                        <img className={styles.enter} src='https://i.ibb.co/Xs82gt5/icon-enter.png' alt='enter'/>
                        Login
                    </Button>
                    }
                </div>
            </div>
        </header>
        </>
    )
}

export default Header
