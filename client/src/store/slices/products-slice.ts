import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import ProductsService from '../../services/products-service'
import {categorie, IProduct, sizeCategorie} from '../../models/IProduct'

import {getCategoriesQty, getSizesQty} from '../../utils/shop'

interface ProductsState {
    isLoading: boolean
    isError: boolean
    categoriesQty?: categorie[]
    sizesQty?: sizeCategorie[]
    products?: IProduct[]
}

const initialState: ProductsState = {
    isLoading: false,
    isError: false
}

export const receive = createAsyncThunk<IProduct[]>(
    'products/receive',
    async () => {
        const response = await ProductsService.getProducts()
        const products = response.data
        return products
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(receive.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.categoriesQty = getCategoriesQty(action.payload)
            state.sizesQty = getSizesQty(action.payload)
            state.products = action.payload
        })
        builder.addCase(receive.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
        })
        builder.addCase(receive.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
        })
    }
})

export default productsSlice.reducer