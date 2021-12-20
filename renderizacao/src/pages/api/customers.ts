import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number
  name: string
  age: number
}

function getRandomId(min = 1, max = 10000) {
  return Math.trunc(Math.random() * (max - min) + min)
}

export default function Customers(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {

  const data = Array.from({ length: 5 }, (_, i) => {
      const id = getRandomId()
      return {
          id,
          name: `Customer #${id}`,
          age: 18 + i
      } as Data
  })

  res.status(200).json(data)
}
