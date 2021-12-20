import { GetStaticProps } from 'next'
import { Layout } from '../components'

type Static3Props = {
    number: number
}

export default function Static2({ number }: Static3Props) {
    return (
        <Layout title="Fundamentos Next - Geração estática #3">
            <h1>Static #03 - SSG / ISG</h1>
            <h2>Esse tipo de página será gerado no modelo SSG, pois utiliza explicitamente a função <i>getStaticProps</i> com a prop <i>revalidate</i></h2>
            <p>Neste caso o Next não vai decidir a melhor estratégia pois o código foi explícito</p>
            <p>Aqui estamos utilizando o revalidade, que indica de quanto em quanto tempo essa página estática deve ser regerada (incremental static regeneration)</p>
            <p>{`Número randomico: ${number}`}</p>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<Static3Props> = async (context) => {
    return {
        revalidate: 7,
        props: {
            number: Math.random()
        }
    }
  }