import { GetStaticProps } from 'next'
import { Layout } from '../components'

type Static4Props = {
    customers: Customer[]
}

type Customer = {
    id: number
    name: string
    age: number
}

export default function Static2({ customers }: Static4Props) {
    return (
        <Layout title="Fundamentos Next - Geração estática #4">
            <h1>Static #04 - SSG</h1>
            <h2>Esse tipo de página será gerado no modelo SSG, pois utiliza explicitamente a função <i>getStaticProps</i></h2>
            <p>Neste caso o Next não vai decidir a melhor estratégia pois o código foi explícito</p>
            <p>Aqui estamos buscando dados de uma API em tempo de build para montar a página</p>
            <hr/>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>
                        <div>
                            {`Nome: ${customer.name} - ${customer.age}`}
                        </div>
                        <div>
                            {`Idade: ${customer.age}`}
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<Static4Props> = async (context) => {
    const response = await fetch('http://localhost:3000/api/customers')
    const customers = await response.json()

    return {
        props: {
            customers
        }
    }
  }