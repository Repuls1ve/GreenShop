import {FC} from 'react'
import Button from '../Button'

import FirstSuggestion from '../../assets/images/image-first-suggestion.png'
import SecondSuggestion from '../../assets/images/image-second-suggestion.png'

import styles from './styles.module.css'

const SuggestionsSection: FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <img className={styles.firstImage} src={FirstSuggestion} alt='suggestion'/>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Summer cactus{<br/>}& succulents</h2>
                        <h3 className={styles.text}>We are an online plant shop offering a wide range of cheap and trendy plants</h3>
                        <Button className={styles.button}>Find More →</Button>
                    </div>
                </div>
                <div className={styles.column}>
                    <img className={styles.secondImage} src={SecondSuggestion} alt='suggestion'/>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Styling Trends {<br/>}& much more</h2>
                        <h3 className={styles.text}>We are an online plant shop offering a wide range of cheap and trendy plants</h3>
                        <Button className={styles.button}>Find More →</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuggestionsSection
