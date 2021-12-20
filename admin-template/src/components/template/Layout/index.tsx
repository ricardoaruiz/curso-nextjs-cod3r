import React from 'react'
import { Content } from '../Content'
import { Header } from '../Header'

import { SideMenu } from '../SideMenu'

import { LayoutProps } from './types'

export const Layout: React.FC<LayoutProps> = ({ title, subtitle, children }) => {
  return (
    <>
      <Header 
        title={title} 
        subtitle={subtitle}
      />

      <SideMenu />

      <Content>
        {children}
      </Content>
    </>
  )
}
