import {FC} from 'react'
import Button from '../Button'

import styles from './styles.module.css'

const Banner: FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h5 className={styles.greeting}>Welcome to greenshop</h5>
                    <h1 className={styles.title}>Let’s Make a{<br/>}Better <span className={styles.wordSelected}>Planet</span></h1>
                    <h5 className={styles.description}>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</h5>
                    <Button className={styles.button}>Shop now</Button>
                </div>
                <img className={styles.image} src='https://i.ibb.co/V2c9T5W/image-banner.png' alt='banner'/>
            </div>
        </section>
    )
}

export default Banner
