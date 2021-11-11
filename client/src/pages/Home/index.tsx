import {FC} from 'react'
import useDeviceDetect from '../../hooks/useDeviceDetect'

import PostsSection from '../../components/Posts'

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
            <h1>Home</h1>
            <PostsSection />
        </div>
        }
        </>
    )
}

export default Home
