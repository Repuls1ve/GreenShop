export type Size = 'Small' | 'Medium' | 'Large'

export interface Categorie {
    name: string
    quantity: number
}

export interface SizeCategorie {
    name: Size
    quantity: number
}