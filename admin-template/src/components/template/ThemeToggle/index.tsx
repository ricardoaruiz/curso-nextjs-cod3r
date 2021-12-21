import React from 'react'
import { ThemeTogglePrpos } from './types'
import { MoonIcon, SunIcon } from '../../icons'

export const ToggleTheme: React.VFC<ThemeTogglePrpos> = ({ isDarkMode, onClick }) => {
  return (
      <button 
        type="button" 
        onClick={onClick}
        className={`
          hidden
          sm:flex items-center justify-between
          px-2.5 py-1
          w-28 lg:w-36
          rounded-full

          bg-gray-700
          text-white

          dark:flex-row-reverse

          ${!isDarkMode 
            ? 'bg-gradient-to-r from-gray-400 to-gray-800'
            : 'bg-gradient-to-r from-yellow-200 to-yellow-700' 
          }
        `}
      >
        <span className={`
          hidden
          sm:flex
          text-sm
        `}>
            {isDarkMode ? 'claro' : 'escuro'}
        </span>

        <span className={`
          flex justify-center items-center
          w-10 h-10
          p-1
          rounded-full
          dark:bg-yellow-500
          bg-black

        `}>
          {isDarkMode ? SunIcon : MoonIcon}
        </span>
      </button>
  )
}
