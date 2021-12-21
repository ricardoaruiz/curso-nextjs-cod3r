import React from 'react'
import { NextPage } from 'next'
import { Layout } from '../components'

const Notifications: NextPage = () => {
  return (
    <Layout 
      title="Notificações" 
      subtitle="Aqui você terá todas as suas notificações"
    >
      <h1 className="text-3xl font-bold">
        Notificações
      </h1>      
    </Layout>
  )
}

export default Notifications
