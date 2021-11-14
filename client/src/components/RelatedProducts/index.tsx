import {FC} from 'react'
import {ProductPreview} from '../../models/IProduct'

import Product from '../Product'

import styles from './styles.module.css'

const products: ProductPreview[] = [
    {
        image: 'https://i.ibb.co/MGwpHMH/image-product-preview.png',
        name: 'Barberton Daisy',
        cost: '$119.00'
    },
    {
        image: 'https://i.ibb.co/MGwpHMH/image-product-preview.png',
        name: 'Angel Wing Begonia',
        cost: '$169.00'
    },
    {
        image: 'https://i.ibb.co/MGwpHMH/image-product-preview.png',
        name: 'African Violet',
        cost: '$199.00'
    },
    {
        image: 'https://i.ibb.co/MGwpHMH/image-product-preview.png',
        name: 'Beach Spider Lily',
        cost: '$129.00'
    },
    {
        image: 'https://i.ibb.co/MGwpHMH/image-product-preview.png',
        name: 'Blushing Bromeliad',
        cost: '$139.00'
    }
]

const RelatedProductsSection: FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2 className={styles.title}>Related Products</h2>
                </div>
                <div className={styles.images}>
                    {products.map(product => (
                        <Product className={styles.product} product={product}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RelatedProductsSection
