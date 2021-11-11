import {FC} from 'react'
import {IPostPreview} from '../../models/IPost'

import styles from './styles.module.css'

interface IPostProps {
    post: IPostPreview
}

const Post: FC<IPostProps> = ({post}) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}/>
            <div className={styles.content}>
                <h3 className={styles.additions}>{`${post.date} | Read in ${post.time}`}</h3>
                <h2 className={styles.title}>{post.title}</h2>
                <h3 className={styles.text}>{post.text}</h3>
                <div className={styles.continue}>
                    <h3 className={styles.read}>Read More..</h3>
                </div>
            </div>
        </div>
    )
}

export default Post
