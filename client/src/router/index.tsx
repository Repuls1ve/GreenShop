import {FC, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import {useAppDispatch} from '../hooks/redux'
import {getProducts} from '../store/slices/products-slice'
import {refresh} from '../store/slices/user-slice'

import ProfileLayout from '../components/Profile/Layout'
import ProfileDetails from '../pages/Profile/Details'
import ProfileAddress from '../pages/Profile/Address'
import ProfileOrders from '../pages/Profile/Orders'
import ProfileWishlist from '../pages/Profile/Wishlist'
import ProfileReports from '../pages/Profile/Reports'
import ProfileDownloads from '../pages/Profile/Downloads'
import ProfileSupport from '../pages/Profile/Support'

import Layout from '../components/Layout'
import Shop from '../pages/Shop'
import Home from '../pages/Home'

const AppRouter: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProducts())
        dispatch(refresh())
    }, [dispatch])

    return (
        <>
        <Routes>
            <Route path='' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='shop/:sku' element={<Shop/>}/>
            </Route>
            <Route path='/profile' element={<ProfileLayout/>}>
                <Route index element={<ProfileDetails/>}/>
                <Route path='address' element={<ProfileAddress/>}/>
                <Route path='orders' element={<ProfileOrders/>}/>
                <Route path='wishlist' element={<ProfileWishlist/>}/>
                <Route path='reports' element={<ProfileReports/>}/>
                <Route path='downloads' element={<ProfileDownloads/>}/>
                <Route path='support' element={<ProfileSupport/>}/>
            </Route>
        </Routes>
        </>
    )
}

export default AppRouter