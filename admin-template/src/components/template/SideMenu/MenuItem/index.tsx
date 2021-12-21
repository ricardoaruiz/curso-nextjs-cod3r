import Link from 'next/link'
import React from 'react'

import { MenuItemProps } from './types'

export const MenuItem: React.VFC<MenuItemProps> = ({ href, label, icon, className, onClick }) => {

  const renderAnchor = React.useCallback(() => {
    return (
      <a className={`
          flex flex-col justify-center items-center
          w-20 h-20
          hover:bg-gray-200
          text-gray-600
          ${className}
        `}
        >
          {icon}
          <span className={`
            mt-2
            text-xs
            font-light
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
