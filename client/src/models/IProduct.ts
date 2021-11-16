export type categorieName =
    'House Plants' | 'Potter Plants' | 'Seeds' |
    'Small Plants' | 'Big Plants' | 'Succulents' |
    'Terrariums' | 'Gardening' | 'Accessories'

export type categorie = {
    name: categorieName,
    quantity: number
}
export type size = 'Small' | 'Medium' | 'Large'

export type sizeCategorie = {
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
    categories: categorieName[]
    tags: string[]
    images: string[]
}