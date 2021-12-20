import React from 'react'
import Link from 'next/link'
import { GetServerSideProps } from 'next'

import { listProducts } from '../../functions/products'

import styles from '../../styles/Products.module.css'
import { Layout } from '../../components'

type ProductsData = {
    totalPages: number
    totalRegs: number
    page: number
    data: Product[]
}

type Product = {
    id: number
    name: string
    price: number
}


export const getServerSideProps: GetServerSideProps<ProductsData> = async (context) => {
    const page = context.query.page ? +context.query.page : 1
    const data = await listProducts(page)

    return {
        props: { ...data }
    }
}

export default function ProductList(props: ProductsData) {

    const [localData, setLocalData] = React.useState(props)

    const loadPage = React.useCallback(async (page: number) => {
        setLocalData(await listProducts(page))
    }, [])

    return (
        <Layout title="Fundamentos Next - Geração dinamica #2">
            <h1>Lista de Produtos</h1>

            <ul className={styles['list-container']}>
                {localData.data.map(({ id, name, price }) => (
                    <Link href={`/products/${id}`} key={id} passHref>
                        <li >
                            <div>
                                <span>#Id: </span>
                                <span>{id}</span>
                            </div>
                            <div>
                                <span>Name: </span>
                                <span>{name}</span>
                            </div>
                            <div>
                                <span>Price: </span>
                                <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</span>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
            
            <ul className={styles['pagination-container']}>
                {Array.from(
                    { length: props.totalPages}, 
                    (_, i) => {
                        return (
                            <li 
                                key={i+1} 
                                onClick={() => loadPage(i+1)}
                                className={+localData.page === i+1 ? styles.active : undefined}
                            >
                                {i+1}
                            </li>
                        )
                    })}
            </ul>
        </Layout>
    )
}