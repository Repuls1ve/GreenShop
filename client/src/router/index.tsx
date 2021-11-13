import {FC} from 'react'
import {Routes, Route} from 'react-router-dom'

import Layout from '../components/Layout'
import Shop from '../pages/Shop'
import Home from '../pages/Home'

const AppRouter: FC = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='shop/:sku' element={<Shop/>}/>
            </Route>
        </Routes>
        </>
    )
}

export default AppRouter