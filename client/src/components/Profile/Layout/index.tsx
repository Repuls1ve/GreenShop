import {FC} from 'react'
import {Outlet} from 'react-router-dom'

import useDeviceDetect from '../../../hooks/useDeviceDetect'

import ProfileSidebar from '../Sidebar'
import Header from '../../Header'
import Footer from '../../Footer'

import styles from './styles.module.css'

const ProfileLayout: FC = () => {
    const {isMobile} = useDeviceDetect()

    return (
        <>
        {isMobile ?
        <div className={styles.mobile}>
            <Outlet />
        </div>
        :
        <div className={styles.desktop}>
            <Header />
            <div className={styles.content}>
                <ProfileSidebar />
                <Outlet />
            </div>
            <Footer />
        </div>}
        </>
    )
}

export default ProfileLayout
