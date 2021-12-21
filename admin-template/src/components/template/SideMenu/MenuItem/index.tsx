import Link from 'next/link'
import React from 'react'

import { MenuItemProps } from './types'

export const MenuItem: React.VFC<MenuItemProps> = ({ href, label, icon, className, onClick }) => {
  const renderAnchor = React.useCallback(() => {
    return (
      <a className={`
          flex flex-col justify-center items-center
          h-20
          dark:text-gray-300
          ${className || `
           hover:bg-gray-300
           text-gray-700
           dark:hover:bg-gray-800
           `}
          `}
        >
          {icon}
          <span className={`
            mt-2
            text-xs
            font-light
            text-center
            break-words
          `}>
            {label}
          </span>
        </a>
    )
  }, [className, icon, label])

  return (
    <li 
      className={`cursor-pointer`} 
      onClick={!onClick ? (event) => {} : onClick}
    >
      {href ? (
        <Link href={href} passHref>
          {renderAnchor()}
        </Link>
      ): renderAnchor()}
    </li>
  )
}
