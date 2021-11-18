import {FC, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {useAppSelector} from '../../hooks/redux'
import useDeviceDetect from '../../hooks/useDeviceDetect'

import ProductViewSection from '../../components/ProductView'
import RelatedProductsSection from '../../components/RelatedProducts'

const Shop: FC = () => {
    const {products} = useAppSelector(state => state.products)
    const {isMobile} = useDeviceDetect()
    const {sku} = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const product = products.find(product => product.sku === parseInt(sku!)) 

    if (!product) return <div>Not found</div>

    return (
        <>
        {isMobile ?
        <main>
            <h1>Shop Mobile</h1>
        </main>
        : 
        <main>
            <ProductViewSection product={product}/>
            <RelatedProductsSection product={product} />
        </main>
        }
        </>
        
    )
}

export default Shop
