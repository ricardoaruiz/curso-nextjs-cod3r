import React from 'react'
import { MoonIcon, SunIcon } from '../../icons'

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
            flex
            justify-between            
            px-5 py-2
            rounded-2xl
            w-40

            bg-gray-700           
            text-white

            dark:bg-yellow-500
            dark:flex-row-reverse
          `}
        >
          <span className={`
            mr-4 ml-0
            dark:mr-0 dark:ml-4
          `}>
              {isDarkMode ? 'claro' : 'escuro'}
          </span>

          {isDarkMode ? SunIcon : MoonIcon}
        </button>
      </div>      
    </header>
  )
}
