import { GetServerSideProps } from 'next'
import { Layout } from '../components'

type Dynamic1Props = {
    customers: Customer[]
}

type Customer = {
    id: number
    name: string
    age: number
}

export default function Static2({ customers }: Dynamic1Props) {
    return (
        <Layout title="Fundamentos Next - Geração dinâmica #1">
            <h1>Dynamic #01 - SSR</h1>
            <h2>Esse tipo de página será gerado no modelo SSR, pois utiliza explicitamente a função <i>getServerSideProps</i></h2>
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

export const getServerSideProps: GetServerSideProps<Dynamic1Props> = async (context) => {
    const response = await fetch('http://localhost:3000/api/customers')
    const customers = await response.json()

    return {
        props: {
            customers
        }
    }
  }