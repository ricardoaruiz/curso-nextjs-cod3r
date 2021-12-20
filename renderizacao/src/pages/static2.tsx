import { GetStaticProps } from 'next'
import { Layout } from '../components'

type Static2Props = {
    number: number
}

export default function Static2({ number }: Static2Props) {
    return (
        <Layout title="Fundamentos Next - Geração estática #2">
            <h1>Static #02 - SSG</h1>
            <h2>Esse tipo de página será gerado no modelo SSG, pois utiliza explicitamente a função <i>getStaticProps</i></h2>
            <p>Neste caso o Next não vai decidir a melhor estratégia pois o código foi explícito</p>
            <p>{`Número randomico: ${number}`}</p>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<Static2Props> = async (context) => {
    return {
        props: {
            number: Math.random()
        }
    }
  }