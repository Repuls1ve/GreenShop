import {FC, useState, useEffect} from 'react'

import {useAppSelector} from '../../hooks/redux'
import {getSessionPage, setSessionPage} from '../../utils/shop'

import Range from '../Range'
import Button from '../Button'
import Product from '../Product'
import Pagination from '../Pagination'

import styles from './styles.module.css'

const ShopSection: FC = () => {
    const {
        categoriesQty,
        sizesQty,
        pricesExtrema,
        products
    } = useAppSelector(state => state.products)

    const priceRangeDefault = [pricesExtrema.min, pricesExtrema.max]
    const [priceRange, setPriceRange] = useState<number[]>(priceRangeDefault)

    const pageSize = 9
    const sessionPage = getSessionPage()

    const [page, setPage] = useState<number>(sessionPage || 1)

    useEffect(() => {
        setSessionPage(page)
    }, [page])

    const pageProducts = products?.slice((page - 1) * pageSize, page * pageSize)

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.filters}>
                    <div className={styles.categories}>
                        <h2 className={styles.filterTitle}>Categories</h2>
                        {categoriesQty && categoriesQty.map(categorie => (
                            <div key={categorie.name} className={styles.categorie}>
                                <h3 className={styles.categorieName}>{categorie.name}</h3>
                                <span className={styles.categorieQuantity}>{`(${categorie.quantity})`}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.pricing}>
                        <h2 className={styles.filterTitle}>Price Range</h2>
                        <Range
                        defaultValue={priceRangeDefault}
                        min={pricesExtrema.min}
                        max={pricesExtrema.max}
                        onChange={setPriceRange}
                        />
                        <h3 className={styles.priceRange}>
                            Price: <span className={styles.priceAccent}>{`$${priceRange[0]} - $${priceRange[1]}`}</span>
                        </h3>
                        <Button className={styles.priceButton}>Filter</Button>
                    </div>
                    <div className={styles.size}>
                        <h2 className={styles.filterTitle}>Size</h2>
                        {sizesQty && sizesQty.map(size => (
                            <div key={size.name} className={styles.categorie}>
                                <h3 className={styles.categorieName}>{size.name}</h3>
                                <span className={styles.categorieQuantity}>{`(${size.quantity})`}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.saleBanner}>
                        <img className={styles.saleImage} src='https://i.ibb.co/rxrMDmX/image-sale-banner.png' alt='sale'/>
                    </div>
                </div>
                <div className={styles.products}>
                    <div className={styles.sorting}>
                        <h3 className={styles.sortFieldActive}>All Plants</h3>
                        <h3 className={styles.sortField}>New Arrivals</h3>
                        <h3 className={styles.sortField}>Sale</h3>
                        <h3 className={styles.sortFilter}>Sort by: Default Sorting</h3>
                    </div>
                    <div className={styles.content}>
                        {pageProducts && pageProducts.map(product => (
                            <Product
                            key={product.sku}
                            product={product}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.pages}>
                <Pagination
                hideOnSinglePage
                current={page}
                total={products?.length || 9}
                pageSize={pageSize}
                onChange={setPage}
                />
            </div>
        </section>
    )
}

export default ShopSection