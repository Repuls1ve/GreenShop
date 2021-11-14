import {FC} from 'react'

import styles from './styles.module.css'

const ContactSection: FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.company}>
                    <img className={styles.logo} src='https://i.ibb.co/vqqN18b/icon-logo.png' alt='logo'/>
                    <h2 className={styles.name}>GreenShop</h2>
                </div>
                <div className={styles.location}>
                    <img className={styles.icon} src='https://i.ibb.co/D4WSFYV/icon-location.png' alt='location'/>
                    <h3 className={styles.text}> 1107 Donnon St, Council Grove, KS, 66846</h3>
                </div>
                <div className={styles.email}>
                    <img className={styles.iconEmail} src='https://i.ibb.co/vc1Js27/icon-email.png' alt='email'/>
                    <h3 className={styles.text}>contact@greenshop.com</h3>
                </div>
                <div className={styles.phone}>
                    <img className={styles.iconEmail} src='https://i.ibb.co/mTHkwNw/icon-phone.png' alt='phone'/>
                    <h3 className={styles.text}>+88 01911 717 490</h3>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
