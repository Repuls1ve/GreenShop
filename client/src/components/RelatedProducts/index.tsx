import {FC} from 'react'

import {useAppSelector} from '../../hooks/redux'

import {IProduct} from '../../models/IProduct'
import {getRelatedProducts} from '../../utils/shop'

import Product from '../Product'

import styles from './styles.module.css'

interface RelatedProductsSectionProps {
    product: IProduct
    quantity?: number
}

const RelatedProductsSection: FC<RelatedProductsSectionProps> = ({product, quantity=3}) => {
    const {products} = useAppSelector(state => state.products)
    
    const relatedProducts = getRelatedProducts(product, products)

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2 className={styles.title}>Related Products</h2>
                </div>
                <div className={styles.images}>
                    {relatedProducts.slice(0, quantity).map(product => (
                        <Product
                        key={product.sku}
                        className={styles.product}
                        product={product}
                        navigationPath={`../shop/${product.sku}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RelatedProductsSection
