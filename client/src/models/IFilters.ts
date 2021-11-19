import {categoryName, size} from './IProduct'

export interface IFilters {
    categories: categoryName[]
    price: {
        start: number
        end: number 
    }
    sizes: size[]
}