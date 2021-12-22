import React from 'react'
import { NextPage } from 'next'
import { Layout } from '../components'

const Settings: NextPage = () => {
  return (
    <Layout 
      title="Perfil do usuário" 
      subtitle="Visualize e ajuste as suas configurações"
    >
      <h1 className="text-3xl font-bold">
        Perfil de usuárioConfigurações
      </h1>      
    </Layout>
  )
}

export default Settings
