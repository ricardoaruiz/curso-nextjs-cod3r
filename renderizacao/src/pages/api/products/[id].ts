import type { NextApiRequest, NextApiResponse } from 'next'

import { Product } from './types'
import { products } from './data'

type ProductResponse = {
    data: Product | null
}

export default function Customers(
    req: NextApiRequest,
    res: NextApiResponse<ProductResponse>
  ) {

    const id = +req.query.id
    const data = products.find(product => product.id === id) || null

    res.status(200).json({ data })
}