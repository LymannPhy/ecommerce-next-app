export type ProductType = {
    id: number,
    name: string,
    image: string,
    price:string,
    desc:string,
    seller:string,
    category: {
        name: string,
    }
}
export type EditProductType = {
    id: number,
    name: string,
    image: string,
    price:string,
    category: {
        name: string,
    }
    desc:string,
    seller:string
}