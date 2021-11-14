import {FC, useState} from 'react'

import styles from './styles.module.css'

const NewslettersSection: FC = () => {
    const [email, setEmail] = useState<string>('')

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.advantages}>
                    <div className={styles.advantage}>
                        <div className={styles.content}>
                            <img className={styles.image} src="https://i.ibb.co/5YzCwZz/image-garden-care.png" alt='garden-care'/>
                            <h3 className={styles.title}>Garden Care</h3>
                            <p className={styles.description}>We are an online plant shop offering a wide range of cheap and trendy plants. We are an online shop.</p>
                        </div>
                    </div>
                    <div className={styles.advantage}>
                        <div className={styles.content}>
                        <img className={styles.image} src='https://i.ibb.co/C5W9tfG/image-plant-renovation.png' alt='plant-renovation'/>
                            <h3 className={styles.title}>Plant Renovation</h3>
                            <p className={styles.description}>We are an online plant shop offering a wide range of cheap and trendy plants. We are an online shop.</p>
                        </div>
                    </div>
                    <div className={styles.advantageLast}>
                        <div className={styles.content}>
                        <img className={styles.image} src='https://i.ibb.co/HXJQnym/image-watering-graden.png' alt='watering-graden'/>
                            <h3 className={styles.title}>Watering Graden</h3>
                            <p className={styles.description}>We are an online plant shop offering a wide range of cheap and trendy plants. We are an online shop.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.newsletters}>
                    <div className={styles.newslettersContent}>
                        <h2 className={styles.newslettersTitle}>Would you like to join newsletters?</h2>
                        <div className={styles.inputContainer}>
                            <input
                            className={styles.input}
                            placeholder='enter your email address...'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            />
                            <button className={styles.join}>Join</button>
                        </div>
                        <p className={styles.newslettersDescription}>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green) house to yours! </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewslettersSection
