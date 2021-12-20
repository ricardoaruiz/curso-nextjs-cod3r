import React from 'react'

import { TitleProps } from './types'

export const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className={`
        
        `}
      >
        {title}
      </h1>

      <h2 className={`

        `}
      >
        {subtitle}
      </h2>
    </div>
  )
}
