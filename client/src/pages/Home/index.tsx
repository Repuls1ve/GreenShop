import {FC} from 'react'
import useDeviceDetect from '../../hooks/useDeviceDetect'

import PostsSection from '../../components/Posts'
import SuggestionsSection from '../../components/Suggestions'
import Banner from '../../components/Banner'

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
            
            <h1>Home</h1>
            
            <SuggestionsSection />
            <PostsSection />
        </div>
        }
        </>
    )
}

export default Home
