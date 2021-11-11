import {FC} from 'react'
import {IPostPreview} from '../../models/IPost'

import Post from '../Post'

import styles from './styles.module.css'

const posts: IPostPreview[] = [
    {
        title: 'Cactus & Succulent Care Tips',
        date: 'September 12',
        time: '6 minutes',
        text: 'Cacti are succulents are easy care plants for any home or patio.',
        image: null
    },
    {
        title: 'Top 10 Succulents for Your Home',
        date: 'September 13',
        time: '2 minutes',
        text: 'Best in hanging baskets. Prefers medium to high light.',
        image: null
    },
    {
        title: 'Cacti & Succulent Care Tips',
        date: 'September 15',
        time: '3 minutes',
        text: 'Cacti and succulents thrive in containers and because most are..',
        image: null
    },
    {
        title: 'Best Houseplants Room by Room',
        date: 'September 15',
        time: '2 minutes',
        text: 'The benefits of houseplants are endless. In addition to..',
        image: null
    }
]

const PostsSection: FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.heading}>
                <h1 className={styles.title}>Our Blog Posts</h1>
                <h3 className={styles.text}>We are an online plant shop offering a wide range of cheap and trendy plants.</h3>
            </div>
            <div className={styles.posts}>
                {posts.map(post => (
                    <Post key={post.title} post={post}/>
                ))}
            </div>
        </section>
    )
}

export default PostsSection
