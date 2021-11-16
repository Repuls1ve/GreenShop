import {FC} from 'react'

import {IProduct} from '../../models/IProduct'

import styles from './styles.module.css'

interface ProductProps {
    product: IProduct
    className?: string
}

const Product: FC<ProductProps> = ({className, product}) => {
    return (
        <div className={className || styles.container}>
            <div className={styles.picture}>
                <img className={styles.image} src='https://i.ibb.co/MGwpHMH/image-product-preview.png' alt='product'/>
            </div>
            <div className={styles.description}>
                <h3 className={styles.name}>{product.title}</h3>
                <h3 className={styles.cost}>{product.prices[0].cost}</h3>
            </div>
        </div>
    )
}

export default Product
