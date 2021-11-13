import {FC} from 'react'

import useDeviceDetect from '../../hooks/useDeviceDetect'

const Shop: FC = () => {
    const {isMobile} = useDeviceDetect()

    return (
        <>
        {isMobile ?
        <div>
            <h1>Shop Mobile</h1>
        </div>
        : 
        <div>
        </div>
        }
        </>
        
    )
}

export default Shop
