import {FC} from 'react'
import {Link} from 'react-router-dom'

import Button from '../Button'

import Logo from '../../assets/icons/icon-logo.png'
import Search from '../../assets/icons/icon-search.png'
import Cart from '../../assets/icons/icon-cart.png'
import Enter from '../../assets/icons/icon-enter.png'

import styles from './styles.module.css'

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.company}>
                    <img className={styles.logo} src={Logo} alt='logo'/>
                    <h2 className={styles.name}>GreenShop</h2>
                </div>
                <nav className={styles.nav}>
                    <Link to='/' className={styles.selectedLink}>Home</Link>
                    <Link to='shop' className={styles.link}>Shop</Link>
                    <Link to='plant-care' className={styles.link}>Plant Care</Link>
                    <Link to='blogs' className={styles.link}>Blogs</Link>
                </nav>
                <div className={styles.login}>
                    <img className={styles.search} src={Search} alt='search'/>
                    <img className={styles.cart} src={Cart} alt='cart'/>
                    <Button>
                        <img className={styles.enter} src={Enter} alt='enter'/>
                        Login
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header
