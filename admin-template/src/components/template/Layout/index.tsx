import React from 'react'
import Head from 'next/head'

import { useAppContext } from '../../../data'
import { Content } from '../Content'
import { Header } from '../Header'
import { SideMenu } from '../SideMenu'

import { LayoutProps } from './types'

export const Layout: React.FC<LayoutProps> = ({ title, subtitle, children }) => {
  const { isDarkMode } = useAppContext()

  return (
    <>
      <Head>
        <title>{`Template Admin | ${title}`}</title>
      </Head>
      
      <div className={`
        flex
        h-screen
        w-screen
        ${isDarkMode ? 'dark' : ''}
      `}>
        <SideMenu />

        <div className={`
          flex flex-col
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
    </>
  )
}
