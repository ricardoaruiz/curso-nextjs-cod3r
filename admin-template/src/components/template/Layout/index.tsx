import React from 'react'
import { Content } from '../Content'
import { Header } from '../Header'

import { SideMenu } from '../SideMenu'

import { LayoutProps } from './types'

export const Layout: React.FC<LayoutProps> = ({ title, subtitle, children }) => {
  return (
    <div className={`
      flex
      h-screen
      w-screen
    `}>
      <SideMenu />

      <div className={`
        flex 
        flex-col 
        w-full 
        p-7
        bg-gray-300 dark:bg-gray-500
      `}>
        <Header 
          title={title} 
          subtitle={subtitle}
        />

        <Content>
          {children}
        </Content>
      </div>
    </div>
  )
}
