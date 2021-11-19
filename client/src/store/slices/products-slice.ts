import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import ProductsService from '../../services/products-service'
import {category, IProduct, sizeCategory} from '../../models/IProduct'

import {getCategoriesQty, getPricesExtrema, getSizesQty} from '../../utils/shop'

interface ProductsState {
    isLoading: boolean
    isError: boolean
    categoriesQty: category[]
    sizesQty: sizeCategory[]
    pricesExtrema: {
        min: number,
        max: number
    }
    products: IProduct[]
}

const initialState: ProductsState = {
    isLoading: false,
    isError: false,
    categoriesQty: [],
    sizesQty: [],
    pricesExtrema: {
        min: 0,
        max: 1000
    },
    products: []
}

export const getProducts = createAsyncThunk<IProduct[]>(
    'products/get',
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
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.categoriesQty = getCategoriesQty(action.payload)
            state.sizesQty = getSizesQty(action.payload)
            state.pricesExtrema = getPricesExtrema(action.payload)
            state.products = action.payload
        })
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
        })
    }
})

export default productsSlice.reducer