import type { NextPage } from 'next'

import { useAppContext } from '../data'
import { Layout } from '../components'

const Home: NextPage = () => {
  const { isDarkTheme, toggleTheme } = useAppContext()

  return (
    <Layout 
      title='Página inicial' 
      subtitle='Aqui é a página inicial da sua aplicação'
    >
      <h1 className="text-3xl font-bold">
        Início
      </h1>

    </Layout>
  )
}

export default Home
