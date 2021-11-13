import {FC} from 'react'
import useDeviceDetect from '../../hooks/useDeviceDetect'

import PostsSection from '../../components/Posts'
import SuggestionsSection from '../../components/Suggestions'
import Banner from '../../components/Banner'
import ShopSection from '../../components/Shop'

const Home: FC = () => {
    const {isMobile} = useDeviceDetect()

    return (
        <>
        {isMobile ?
        <div>
            <h1>Home Mobile</h1>
        </div>
        :
        <div>
            <Banner />
            <ShopSection />
            <SuggestionsSection />
            <PostsSection />
        </div>
        }
        </>
    )
}

export default Home
