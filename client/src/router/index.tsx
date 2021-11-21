import {FC, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import {useAppDispatch} from '../hooks/redux'
import {getProducts} from '../store/slices/products-slice'
import {refresh} from '../store/slices/user-slice'

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
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='shop/:sku' element={<Shop/>}/>
            </Route>
        </Routes>
        </>
    )
}

export default AppRouter