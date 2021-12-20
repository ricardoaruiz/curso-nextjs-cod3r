import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'

import { listAllProductsId, loadProduct } from '../../functions/products'

import styles from '../../styles/ProductDetail.module.css'
import { Layout } from '../../components'

type ProductDetailProps = {
    product?: Product
}

type Product = {
    id: number
    name: string
    price: number
}

export const getStaticPaths: GetStaticPaths = async () => {
    const items = await listAllProductsId()

    const paths = items.map(({ id }) => ({
        params: { id: String(id) },
      }))

    return { 
        paths, 

        // Se fallback estiver false vai para a página 404 caso não encontre a página, se estiver
        // Se fallback estiver true vai tentar gerar a página com os parametros informados
        fallback: false 
    }
}

export const getStaticProps: GetStaticProps<ProductDetailProps> = async ({ params }) => {    
    const id = params?.id ? +params.id : 0
    const product = await loadProduct(id)

    return {
        props: {
            product: product || {}
        }
    }
}

export default function ProductDetails(props: ProductDetailProps) {
    const { product } = props
    const id = product?.id
    const name = product?.name
    const price = product?.price

    return (
        <Layout title="Fundamentos Next - Geração dinâmica #2">              
            <h1>Detalhes do produto</h1>

            <div className={styles['info-container']}>
                <div>#Id</div>
                <div>{id}</div>

                <div>Product</div>
                <div>{name}</div>

                <div>Price</div>
                <div>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price ? price : 0)}</div>
            </div>
            
            
            <div className={styles['actions-container']}>
                <Link href="/products" passHref>
                    <a>Voltar</a>
                </Link>
            </div>
        </Layout>

    )
}