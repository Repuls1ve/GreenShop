import {FC} from 'react'
import {Outlet} from 'react-router-dom'

import useDeviceDetect from '../../hooks/useDeviceDetect'

import Header from '../Header'
import Footer from '../Footer'
import ContactSection from '../Contact'
import NewslettersSection from '../Newsletters'

import styles from './styles.module.css'

const Layout: FC = () => {
    const {isMobile} = useDeviceDetect()

    return (
        <div className={styles.container}>
            {isMobile ?
            <>
            <Outlet />
            </>
            :    
            <>
            <Header />
            
            <Outlet />
            <NewslettersSection />
            <ContactSection />
            <Footer />
            </>}
        </div>
    )
}

export default Layout
