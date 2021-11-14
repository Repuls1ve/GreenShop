import {FC} from 'react'

import Button from '../Button'

import styles from './styles.module.css'

const pictures: any[] = [
    'https://i.ibb.co/fSTT9ZY/image-product-view.png',
    'https://i.ibb.co/fSTT9ZY/image-product-view.png',
    'https://i.ibb.co/fSTT9ZY/image-product-view.png',
] 

const sizes: string[] = [
    'S',
    'M',
    'L'
]

const ProductViewSection: FC = () => {
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
                        <h2 className={styles.title}>Barberton Daisy</h2>
                        <h3 className={styles.cost}>$119.00</h3>
                        <h3 className={styles.subTitle}>Short Description</h3>
                        <p className={styles.shortDescription}>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                        <h3 className={styles.subTitle}>Size:</h3>
                        <div className={styles.sizes}>
                            {sizes.map(size => (
                                <div key={size} className={styles.size}>
                                    <h3 className={styles.sizeName}>{size}</h3>
                                </div>
                            ))}
                        </div>
                        <div className={styles.quantity}>
                            <div className={styles.decrease}>-</div>
                            <div className={styles.quantityValue}>2</div>
                            <div className={styles.increase}>+</div>
                            <Button className={styles.buyButton}>Buy now</Button>
                            <Button className={styles.addToCartButton}>Add to cart</Button>
                            <Button className={styles.addToFavourites}>
                                <img className={styles.favouriteIcon} src='https://i.ibb.co/cbgVRp8/icon-favourite.png' alt='favourite'/>
                            </Button>
                        </div>
                        <h3 className={styles.metaInfo}>SKU: <span className={styles.metaValue}>1995751877966</span></h3>
                        <h3 className={styles.metaInfo}>Categories: <span className={styles.metaValue}>Potter Plants</span></h3>
                        <h3 className={styles.metaInfo}>Tags: <span className={styles.metaValue}>Home, Garden, Plants</span></h3>
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
