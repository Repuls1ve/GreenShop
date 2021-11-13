import {FC, useState} from 'react'

import {Categorie, SizeCategorie} from '../../types/filters'
import {ProductPreview} from '../../models/IProduct'

import Range from '../Range'
import Button from '../Button'
import Product from '../Product'

import SaleBanner from '../../assets/images/image-sale-banner.png'
import ProductImage from '../../assets/images/image-product-preview.png'

import styles from './styles.module.css'

const sizes: SizeCategorie[] = [
    {
        name: 'Small',
        quantity: 119,
    },
    {
        name: 'Medium',
        quantity: 86,
    },
    {
        name: 'Large',
        quantity: 78,
    }
]

const categories: Categorie[] = [
    {
        name: 'House Plants',
        quantity: 33
    },
    {
        name: 'Potter Plants',
        quantity: 12
    },
    {
        name: 'Seeds',
        quantity: 65
    },
    {
        name: 'Small Plants',
        quantity: 39
    },
    {
        name: 'Big Plants',
        quantity: 23
    },
    {
        name: 'Succulents',
        quantity: 17
    },
    {
        name: 'Terrariums',
        quantity: 19
    },
    {
        name: 'Gardening',
        quantity: 13
    },
    {
        name: 'Accessories',
        quantity: 18
    }
]

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
    },
    {
        image: ProductImage,
        name: 'Aluminm Plant',
        cost: '$119.00'
    },
    {
        image: ProductImage,
        name: 'Bird\'s Nest Fern',
        cost: '$99.00'
    },
    {
        image: ProductImage,
        name: 'Broadleaf Lady Palm',
        cost: '$59.00'
    },
    {
        image: ProductImage,
        name: 'Chinese Evergreen',
        cost: '$39.00'
    }
]

const ShopSection: FC = () => {
    let minPrice = 50,
        maxPrice = 1500

    const priceRangeDefault = [minPrice, maxPrice]

    const [priceRange, setPriceRange] = useState<number[]>(priceRangeDefault)

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.filters}>
                    <div className={styles.categories}>
                        <h2 className={styles.filterTitle}>Categories</h2>
                        {categories.map(categorie => (
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
                        min={minPrice}
                        max={maxPrice}
                        onChange={setPriceRange}
                        />
                        <h3 className={styles.priceRange}>
                            Price: <span className={styles.priceAccent}>{`$${priceRange[0]} - $${priceRange[1]}`}</span>
                        </h3>
                        <Button className={styles.priceButton}>Filter</Button>
                    </div>
                    <div className={styles.size}>
                        <h2 className={styles.filterTitle}>Size</h2>
                        {sizes.map(size => (
                            <div key={size.name} className={styles.categorie}>
                                <h3 className={styles.categorieName}>{size.name}</h3>
                                <span className={styles.categorieQuantity}>{`(${size.quantity})`}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.saleBanner}>
                        <img className={styles.saleImage} src={SaleBanner} alt='sale'/>
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
                        {products.map(product => (
                            <Product
                            product={product}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.pages}>

            </div>
        </section>
    )
}

export default ShopSection