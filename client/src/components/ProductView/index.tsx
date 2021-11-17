import {FC, useState} from 'react'
import {IProduct, size} from '../../models/IProduct'

import Button from '../Button'

import styles from './styles.module.css'

const pictures: any[] = [
    'https://i.ibb.co/fSTT9ZY/image-product-view.png',
    'https://i.ibb.co/fSTT9ZY/image-product-view.png',
    'https://i.ibb.co/fSTT9ZY/image-product-view.png',
] 

interface ProductViewSectionProps {
    product: IProduct
}

const ProductViewSection: FC<ProductViewSectionProps> = ({product}) => {
    const [quantity, setQuantity] = useState(1) 
    const [selectedSize, setSelectedSize] = useState<size>(product.sizes[0])

    const handleCost = () => {
        let cost
        switch (selectedSize) {
            case 'Small':
                cost = product.prices[0].cost
                break
            case 'Medium':
                cost = product.prices[1].cost
                break
            case 'Large':
                cost = product.prices[2].cost
                break
        }
        const currency = cost[0]
        const price = parseFloat(cost.slice(1))
        return `${currency}${(price * quantity).toFixed(2)}`
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <div className={styles.pictures}>
                        {pictures.map(picture => (
                            <div key={Math.random()} className={styles.imageContainer}>
                                <img src={picture} className={styles.image} alt='product'/>
                            </div>
                        ))}
                    </div>
                    <div className={styles.picture}>
                        <div className={styles.mainImageContainer}>
                            <img src='https://i.ibb.co/QrPmmJV/image-product-view-huge.png' className={styles.mainImage} alt='product'/>
                        </div>
                    </div>
                    <div className={styles.headingDescriptions}>
                        <h2 className={styles.title}>{product.title}</h2>
                        <h3 className={styles.cost}>{handleCost()}</h3>
                        <h3 className={styles.subTitle}>Short Description</h3>
                        <p className={styles.shortDescription}>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                        <h3 className={styles.subTitle}>Size:</h3>
                        <div className={styles.sizes}>
                            {product.sizes.map(size => (
                                <div
                                key={size}
                                className={`${styles.size} ${size === selectedSize && styles.sizeActive}`}
                                onClick={() => setSelectedSize(size)}
                                >
                                    <h3 className={`${styles.sizeName} ${size === selectedSize && styles.sizeNameActive}`}>
                                    {size[0]}
                                    </h3>
                                </div>
                            ))}
                        </div>
                        <div className={styles.quantity}>
                            <div
                            className={styles.decrease}
                            onClick={() => setQuantity(quantity <= 1 ? quantity : quantity - 1)}
                            >-</div>
                            <div className={styles.quantityValue}>{quantity}</div>
                            <div
                            className={styles.increase}
                            onClick={() => setQuantity(quantity >= 10 ? quantity : quantity + 1)}
                            >+</div>
                            <Button className={styles.buyButton}>Buy now</Button>
                            <Button className={styles.addToCartButton}>Add to cart</Button>
                            <Button className={styles.addToFavourites}>
                                <img className={styles.favouriteIcon} src='https://i.ibb.co/cbgVRp8/icon-favourite.png' alt='favourite'/>
                            </Button>
                        </div>
                        <h3 className={styles.metaInfo}>SKU: <span className={styles.metaValue}>{product.sku}</span></h3>
                        <h3 className={styles.metaInfo}>
                            Categories: <span className={styles.metaValue}>{product.categories.join(', ')}</span>
                        </h3>
                        <h3 className={styles.metaInfo}>
                            Tags: <span className={styles.metaValue}>{product.tags.join(', ')}</span>
                        </h3>
                        <div className={styles.sharing}>
                            <h3 className={styles.sharingTitle}>Share this product:</h3>
                            <img className={styles.sharingIcon} src='https://i.ibb.co/p3rbsSz/icon-facebook-black.png' alt='facebook'/>
                            <img className={styles.sharingIcon} src='https://i.ibb.co/HBypvhX/icon-linkedin-black.png' alt='linked-in'/>
                        </div>
                    </div>
                </div>
                <div className={styles.descriptions}>
                    <div className={styles.branches}>
                        <h2 className={styles.branchNameActive}>Product Description</h2>
                        <h2 className={styles.branchName}>Reviews (19)</h2>
                    </div>
                    <p className={styles.description}>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. <br/><br/>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                </div>
            </div>
        </section>
    )
}

export default ProductViewSection
