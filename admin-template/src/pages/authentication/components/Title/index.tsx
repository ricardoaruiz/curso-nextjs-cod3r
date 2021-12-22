import React from 'react'
import { TitleProps } from './types'

export const Title: React.VFC<TitleProps> = ({ isSignin }) => {
  return (
    <h1 className={`
      text-3xl text-center font-bold
      mb-8
    `}>
        {isSignin
            ? 'Entre com a sua conta' 
            : 'Cadastre-se na plataforma'
        }
    </h1>
  )
}
