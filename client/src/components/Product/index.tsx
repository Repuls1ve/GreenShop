import {FC} from 'react'
import {Link} from 'react-router-dom'

import {IProduct} from '../../models/IProduct'

import styles from './styles.module.css'

interface ProductProps {
    product: IProduct
    navigationPath?: string
    className?: string
}

const Product: FC<ProductProps> = ({className, product, navigationPath}) => {
    const actualCost = product.prices.find(price => price.size === product.sizes[0])?.cost
    return (
        <div className={className || styles.container}>
            <Link to={navigationPath || `shop/${product.sku}`} target='_blank' className={styles.picture}>
                <img className={styles.image} src={product.images[0]} alt='product'/>
            </Link>
            <div className={styles.description}>
                <h3 className={styles.name}>{product.title}</h3>
                <h3 className={styles.cost}>{actualCost || product.prices[0].cost}</h3>
            </div>
        </div>
    )
}

export default Product
