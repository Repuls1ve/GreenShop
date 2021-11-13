import {FC} from 'react'
import {ProductPreview} from '../../models/IProduct'

import ProductImage from '../../assets/images/image-product-preview.png'
import Product from '../Product'

import styles from './styles.module.css'

const products: ProductPreview[] = [
    {
        image: ProductImage,
        name: 'Barberton Daisy',
        cost: '$119.00'
    },
    {
        image: ProductImage,
        name: 'Angel Wing Begonia',
        cost: '$169.00'
    },
    {
        image: ProductImage,
        name: 'African Violet',
        cost: '$199.00'
    },
    {
        image: ProductImage,
        name: 'Beach Spider Lily',
        cost: '$129.00'
    },
    {
        image: ProductImage,
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
