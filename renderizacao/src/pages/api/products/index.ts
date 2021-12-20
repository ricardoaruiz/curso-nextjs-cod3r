import type { NextApiRequest, NextApiResponse } from 'next'

import { Product } from './types'
import { products } from './data'

type ProductsResponse = {
    totalRegs: number
    totalPages: number
    page: number
    data: Product[] | null
}

export default function Customers(
  req: NextApiRequest,
  res: NextApiResponse<ProductsResponse>
) {
    const page = +req.query.page || 1
    const pageRegs = +req.query.pageRegs || 0
    const totalRegs = products.length
    const totalPages = pageRegs ? Math.ceil(totalRegs / pageRegs) : 1
    
    const begin = ((page - 1) * pageRegs)
    const end = pageRegs ? page * pageRegs : totalRegs    
    const data = products.slice(begin, end)

    return res.status(200).json({
        totalRegs,
        totalPages,
        page,
        data: data.length ? data : null
    })
    
}
