import {FC} from 'react'
import {Outlet} from 'react-router-dom'

import useDeviceDetect from '../../../hooks/useDeviceDetect'
import {useAppSelector} from '../../../hooks/redux'

import ProfileSidebar from '../Sidebar'
import Header from '../../Header'
import Footer from '../../Footer'

import styles from './styles.module.css'

const ProfileLayout: FC = () => {
    const {isRefreshLoading, isLoading, isAuth} = useAppSelector(state => state.user)
    const {isMobile} = useDeviceDetect()

    return (
        <>
        {isMobile ?
        <div className={styles.mobile}>
            <h3>Profile Mobile</h3>
        </div>
        :
        <div className={styles.desktop}>
            <Header />
            <div className={styles.content}>
                {isAuth ?
                <>
                <ProfileSidebar />
                <Outlet />
                </>
                :
                isLoading || isRefreshLoading ?
                <h4>Loading...</h4>
                :
                <h4>You don't have the necessary permissions to access this page</h4>}
            </div>
            <Footer />
        </div>}
        </>
    )
}

export default ProfileLayout
