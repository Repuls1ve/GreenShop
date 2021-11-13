import {FC} from 'react'

import ProductViewSection from '../../components/ProductView'
import RelatedProductsSection from '../../components/RelatedProducts'

import useDeviceDetect from '../../hooks/useDeviceDetect'

const Shop: FC = () => {
    const {isMobile} = useDeviceDetect()

    return (
        <>
        {isMobile ?
        <main>
            <h1>Shop Mobile</h1>
        </main>
        : 
        <main>
            <ProductViewSection />
            <RelatedProductsSection />
        </main>
        }
        </>
        
    )
}

export default Shop
