import {IFilters} from '../models/IFilters'
import {IProduct, categoryName, size} from '../models/IProduct'

export const getFilteredProducts = (filters: IFilters, products: IProduct[]): IProduct[] => {
    const filteredByCategories =
        products.filter(product => filters.categories.length ? product.categories.some(c => filters.categories.includes(c)) : true)
    const filteredBySizes =
        filteredByCategories.filter(product => filters.sizes.length ? product.sizes.some(s => filters.sizes.includes(s)) : true)
    const result =
        filteredBySizes.filter(product => {
            const price = parseFloat(product.prices.find(price => price.size === product.sizes[0])!.cost.slice(1))
            return price >= filters.price.start && price <= filters.price.end
        })
    return result
}

export const handleFilterCategory = (filters: IFilters, category: categoryName): IFilters => {
    if (filters.categories.includes(category)) {
        filters = {
            ...filters,   
            categories: filters.categories.filter(v => v !== category)
        }
        return filters
    }
    return {
        ...filters,
        categories: filters.categories.concat(category)
    }
}

export const handleFilterSize = (filters: IFilters, size: size): IFilters => {
    if (filters.sizes.includes(size)) {
        filters = {
            ...filters,
            sizes: filters.sizes.filter(v => v !== size)
        }
        return filters
    }
    return {
        ...filters,
        sizes: filters.sizes.concat(size)
    }
}

export const handleFilterPrice = (filters: IFilters, price: IFilters['price']): IFilters => {
    return {
        ...filters,
        price: price
    }
}
