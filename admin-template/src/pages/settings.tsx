import React from 'react'
import { NextPage } from 'next'
import { Layout } from '../components'

const Settings: NextPage = () => {
  return (
    <Layout 
      title="Configurações" 
      subtitle="Aqui você terá todas as suas configurações"
    >
      <h1 className="text-3xl font-bold">
        Configurações
      </h1>      
    </Layout>
  )
}

export default Settings
