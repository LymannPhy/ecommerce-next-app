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