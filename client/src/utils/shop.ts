import {categorie, IProduct, sizeCategorie} from '../models/IProduct'

const occurrencesCount = (array: any[], value: any): number => {
    return array.filter(v => v === value).length
}

export const getCategoriesQty = (products: IProduct[]): categorie[] => {
    let categories: categorie['name'][] = []
    let result: categorie[] = []
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

export const getSizesQty = (products: IProduct[]): sizeCategorie[] => {
    let sizes: sizeCategorie['name'][] = []
    let result: sizeCategorie[] = []
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
    const maxInitial = parseFloat(products[0].prices.slice(-1)[0].cost.slice(1))
    const minInitial = parseFloat(products[0].prices[0].cost.slice(1))
    const max = products.reduce((prev, item) => {
        const cost = parseFloat(item.prices.slice(-1)[0].cost.slice(1))
        return prev < cost ? cost : prev
    }, maxInitial)
    const min = products.reduce((prev, item) => {
        const cost = parseFloat(item.prices[0].cost.slice(1))
        return prev > cost ? cost : prev
    }, minInitial)
    return {
        min,
        max
    }
}