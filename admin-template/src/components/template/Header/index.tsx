import React from 'react'

import { useAppContext } from '../../../data'
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
      
      <div>
        <button 
          type="button" 
          onClick={toggleTheme}
          className={`
            dark:text-white
            text-black
          `}
        >
          Mudar para {isDarkMode ? 'Claro' : 'Escuro'}
        </button>
      </div>      
    </header>
  )
}
