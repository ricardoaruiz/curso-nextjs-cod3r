import React from 'react'

import { useAppContext, useAuthContext } from '../../../data'
import { Avatar } from '../Avatar'
import { ToggleTheme } from '../ThemeToggle'
import { Title } from '../Title'

import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {

  const { user } = useAuthContext()
  const { isDarkMode, toggleTheme } = useAppContext()

  return (
    <header className={`
      flex justify-between items-center
    `}>
      <Title
        title={title} 
        subtitle={subtitle} 
      />      
      
      <div className={`
        flex
        items-center
        gap-3
      `}>
        <ToggleTheme
          isDarkMode={isDarkMode}
          onClick={toggleTheme}
        />

        <Avatar 
          name={user?.name || user?.email}
          imageUrl={user?.imageUrl} 
        />
      </div>
    </header>
  )
}
