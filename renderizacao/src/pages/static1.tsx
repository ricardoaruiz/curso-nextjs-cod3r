import { Layout } from "../components";

export default function Static1() {
    return (
        <Layout title="Fundamentos Next - Geração estática #1">
            <h1>Static #01 - SSG</h1>
            <h2>Esse tipo de página sempre será gerado no modelo SSG</h2>
            <p>O Next define a melhor estratégia em função do código escrito</p>
        </Layout>
    )
}