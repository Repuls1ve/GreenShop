import {category, IProduct, sizeCategory} from '../models/IProduct'

const occurrencesCount = (array: any[], value: any): number => {
    return array.filter(v => v === value).length
}

export const setSessionPage = (page: number): void => sessionStorage.setItem('page', JSON.stringify(page))

export const getSessionPage = (): number | null => {
    const sessionPage = sessionStorage.getItem('page')
    if (sessionPage) {
        return parseInt(JSON.parse(sessionPage))
    }
    return null
}

export const getRelatedProducts = (product: IProduct, products: IProduct[]): IProduct[] => {
    return products.filter(item => item.categories.every(c => product.categories.includes(c)))
}

export const getCategoriesQty = (products: IProduct[]): category[] => {
    let categories: category['name'][] = []
    let result: category[] = []
    products.forEach(product => {
        categories = categories.concat(product.categories)
    })
    categories.forEach(categorieName => {
        const count = occurrencesCount(categories, categorieName)
        let isExist = false
        result.forEach(categorie => {
            if (categorie.name.includes(categorieName)) {
                isExist = true
            }
        })
        if (!isExist) {
            result.push({
                name: categorieName,
                quantity: count
            })
        }
    })
    return result
}

export const getSizesQty = (products: IProduct[]): sizeCategory[] => {
    let sizes: sizeCategory['name'][] = []
    let result: sizeCategory[] = []
    products.forEach(product => (
        sizes = sizes.concat(product.sizes)
    ))
    sizes.forEach(size => {
        const count = occurrencesCount(sizes, size)
        let isExist = false
        result.forEach(resultSize => {
            if (resultSize.name.includes(size)) {
                isExist = true
            }
        })
        if (!isExist) {
            result.push({
                name: size,
                quantity: count
            })
        }
    })
    return result
}

export const getPricesExtrema = (products: IProduct[]): {
    min: number,
    max: number
} => {
    const initial = parseFloat(products[0].prices[0].cost.slice(1))
    const max = products.reduce((prev, item) => {
        const cost = parseFloat(item.prices[0].cost.slice(1))
        return prev < cost ? cost : prev
    }, initial)
    const min = products.reduce((prev, item) => {
        const cost = parseFloat(item.prices[0].cost.slice(1))
        return prev > cost ? cost : prev
    }, initial)
    return {
        min,
        max
    }
}