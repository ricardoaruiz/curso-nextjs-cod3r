import React from 'react'

import { Title } from '../Title'

import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header>
      <Title 
        title={title} 
        subtitle={subtitle} 
      />
    </header>
  )
}
