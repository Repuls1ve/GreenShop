import {FC} from 'react'
import {Link} from 'react-router-dom'

import styles from './styles.module.css'

type SocialMediaLinkProps = {
    icon: any
    href: string
    alt: string
}

const SocialMediaLink: FC<SocialMediaLinkProps> = ({icon, alt, href}) => {
    return (
        <a href={href} className={styles.iconContainer} target='_blank' rel='noreferrer'>
            <img src={icon} alt={alt}/>
        </a>
    )
}

const Footer: FC = () => {
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.container}>
                <section className={styles.section}>
                    <h3 className={styles.title}>My Account</h3>
                    <Link to='/' className={styles.link}>My Account</Link>
                    <Link to='/' className={styles.link}>Our stores</Link>
                    <Link to='/' className={styles.link}>Contact us</Link>
                    <Link to='/' className={styles.link}>Career</Link>
                    <Link to='/' className={styles.link}>Specials</Link>
                </section>
                <section className={styles.section}>
                    <h3 className={styles.title}>Help & Guide</h3>
                    <Link to='/' className={styles.link}>Help Center</Link>
                    <Link to='/' className={styles.link}>How to Buy</Link>
                    <Link to='/' className={styles.link}>Shipping & Delivery</Link>
                    <Link to='/' className={styles.link}>Product Policy</Link>
                    <Link to='/' className={styles.link}>How to Return</Link>
                </section>
                <section className={styles.section}>
                    <h3 className={styles.title}>Categories</h3>
                    <Link to='/' className={styles.link}>House Plants</Link>
                    <Link to='/' className={styles.link}>Potter Plants</Link>
                    <Link to='/' className={styles.link}>Seeds</Link>
                    <Link to='/' className={styles.link}>Small Plants</Link>
                    <Link to='/' className={styles.link}>Accessories</Link>
                </section>
                <section className={styles.socialSection}>
                    <section className={styles.media}>
                        <h3 className={styles.socialTitle}>Social Media</h3>
                        <div className={styles.mediaLinks}>
                            <SocialMediaLink href='' icon='https://i.ibb.co/5KH3jsP/icon-facebook.png' alt='facebook'/>
                            <SocialMediaLink href='' icon='https://i.ibb.co/4YwMjzj/icon-instagram.png' alt='instagram'/>
                            <SocialMediaLink href='' icon='https://i.ibb.co/x6rXzLj/icon-twitter.png' alt='twitter'/>
                            <SocialMediaLink href='' icon='https://i.ibb.co/VW6qq8g/icon-linkedin.png' alt='linkedin'/>
                        </div>
                    </section>
                    <section className={styles.payment}>
                        <h3 className={styles.socialTitle}>We accept</h3>
                        <img className={styles.iconPayment} src='https://i.ibb.co/M7BNp7K/icon-payment.png' alt='payment'/>
                    </section>
                </section>
            </div>
        </footer>
        <div className={styles.copy}>
            <small className={styles.copyText}>&copy; 2021 GreenShop. All Rights Reserved.</small>
        </div>
        </>
    )
}

export default Footer