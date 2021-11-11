import {FC} from 'react'

import Logo from '../../assets/icons/icon-logo.png'
import Location from '../../assets/icons/icon-location.png'
import Email from '../../assets/icons/icon-email.png'
import Phone from '../../assets/icons/icon-phone.png'

import styles from './styles.module.css'

const ContactSection: FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.company}>
                    <img className={styles.logo} src={Logo} alt='logo'/>
                    <h2 className={styles.name}>GreenShop</h2>
                </div>
                <div className={styles.location}>
                    <img className={styles.icon} src={Location} alt='location'/>
                    <h3 className={styles.text}> 1107 Donnon St, Council Grove, KS, 66846</h3>
                </div>
                <div className={styles.email}>
                    <img className={styles.iconEmail} src={Email} alt='email'/>
                    <h3 className={styles.text}>contact@greenshop.com</h3>
                </div>
                <div className={styles.phone}>
                    <img className={styles.iconEmail} src={Phone} alt='phone'/>
                    <h3 className={styles.text}>+88 01911 717 490</h3>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
