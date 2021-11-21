import {configureStore} from '@reduxjs/toolkit'

import productsReducer from './slices/products-slice'
import userReducer from './slices/user-slice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

