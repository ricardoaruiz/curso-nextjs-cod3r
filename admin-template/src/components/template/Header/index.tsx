import React from 'react'

import { useAppContext } from '../../../data'
import { ToggleTheme } from '../ThemeToggle'
import { Title } from '../Title'

import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {

  const { isDarkMode, toggleTheme } = useAppContext()

  return (
    <header className={`
      flex justify-between items-center
    `}>
      <Title
        title={title} 
        subtitle={subtitle} 
      />      
      
      <ToggleTheme
        isDarkMode={isDarkMode}
        onClick={toggleTheme}
      />
    </header>
  )
}
