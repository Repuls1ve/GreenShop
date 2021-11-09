import {FC} from 'react'
import {Outlet} from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'

import styles from './styles.module.css'

const Layout: FC = () => {
    return (
        <div className={styles.container}>
            <Header />

            <Outlet />
            
            <Footer />
        </div>
    )
}

export default Layout
