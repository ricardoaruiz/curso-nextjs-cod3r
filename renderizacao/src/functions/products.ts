type ProductsData = {
    totalPages: number
    totalRegs: number
    page: number
    data: Product[]
}

type ProductData = {
    data: Product
}

type Product = {
    id: number
    name: string
    price: number
}

const defaultPageRegs = 4
const BASE_URL = 'http://localhost:3000/api/products'

export const listProducts = async (page = 1, pageRegs = defaultPageRegs): Promise<ProductsData> => {
    const response = await fetch(`${BASE_URL}?pageRegs=${pageRegs}&page=${page}`)
    const data: ProductsData = await response.json()
    return data
}

export const listAllProductsId = async (): Promise<{id: number}[]> => {
    const response = await listProducts(1,0)
    return response.data.map(item => ({ id: item.id }))
}

export const loadProduct = async (id: number): Promise<Product> => {
    const response = await fetch(`${BASE_URL}/${id}`)
    const json: ProductData = await response.json()
    return json.data
}