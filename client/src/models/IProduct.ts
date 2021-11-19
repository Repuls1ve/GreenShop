export type categoryName =
    'House Plants' | 'Potter Plants' | 'Seeds' |
    'Small Plants' | 'Big Plants' | 'Succulents' |
    'Terrariums' | 'Gardening' | 'Accessories'

export type category = {
    name: categoryName,
    quantity: number
}
export type size = 'Small' | 'Medium' | 'Large'

export type sizeCategory = {
    name: size,
    quantity: number
}

export type price = {
    size: size
    cost: string
}

export interface IProduct {
    title: string
    prices: price[]
    sizes: size[]
    sku: number
    categories: categoryName[]
    tags: string[]
    images: string[]
}