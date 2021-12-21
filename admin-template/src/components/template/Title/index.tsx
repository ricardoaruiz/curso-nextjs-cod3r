import React from 'react'

import { TitleProps } from './types'

export const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className={`
          font-black
          text-3xl
          text-gray-900
        `}
      >
        {title}
      </h1>

      <h2 className={`
          font-light
          text-sm
          text-gray-600
        `}
      >
        {subtitle}
      </h2>
    </div>
  )
}
