import {FC, useState} from 'react'
import {NavLink} from 'react-router-dom'

import Button from '../Button'
import AuthModal from '../AuthModal'

import Logo from '../../assets/icons/icon-logo.png'
import Search from '../../assets/icons/icon-search.png'
import Cart from '../../assets/icons/icon-cart.png'
import Enter from '../../assets/icons/icon-enter.png'

import styles from './styles.module.css'

const Header: FC = () => {
    const [isModalOpen, setModalOpen] = useState(false)

    const openModal = () => setModalOpen(true)

    const switchActive = ({isActive}: {
        isActive: boolean
    }) => isActive ? styles.activeLink : styles.link

    return (
        <>
        <AuthModal
        isOpen={isModalOpen}
        setIsOpen={setModalOpen}
        />
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.company}>
                    <img className={styles.logo} src={Logo} alt='logo'/>
                    <h2 className={styles.name}>GreenShop</h2>
                </div>
                <nav className={styles.nav}>
                    <NavLink to='/' className={switchActive}>Home</NavLink>
                    <NavLink to='shop/test-sku' className={switchActive}>Shop</NavLink>
                    <NavLink to='plant-care' className={switchActive}>Plant Care</NavLink>
                    <NavLink to='blogs' className={switchActive}>Blogs</NavLink>
                </nav>
                <div className={styles.login}>
                    <img className={styles.search} src={Search} alt='search'/>
                    <img className={styles.cart} src={Cart} alt='cart'/>
                    <Button
                    onClick={openModal}
                    >
                        <img className={styles.enter} src={Enter} alt='enter'/>
                        Login
                    </Button>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header
