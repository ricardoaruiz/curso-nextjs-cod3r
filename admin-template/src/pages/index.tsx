import type { NextPage } from 'next'

import { Layout } from '../components'

const Home: NextPage = () => {
  return (
    <Layout 
      title='Página inicial' 
      subtitle='Estamos construindo um template admin'
    >
      <div className="text-3xl font-bold">
        Conteúdo 111
      </div>

    </Layout>
  )
}

export default Home
