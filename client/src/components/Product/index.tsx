import {FC} from 'react'

import {ProductPreview} from '../../models/IProduct'

import styles from './styles.module.css'

interface ProductProps {
    product: ProductPreview
    className?: string
}

const Product: FC<ProductProps> = ({className, product}) => {
    return (
        <div className={className || styles.container}>
            <div className={styles.picture}>
                <img className={styles.image} src={product.image} alt='product'/>
            </div>
            <div className={styles.description}>
                <h3 className={styles.name}>{product.name}</h3>
                <h3 className={styles.cost}>{product.cost}</h3>
            </div>
        </div>
    )
}

export default Product
