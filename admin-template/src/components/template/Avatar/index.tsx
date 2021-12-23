import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { AvatarProps } from './types'
export const Avatar: React.VFC<AvatarProps> = ({ name, imageUrl }) => {
  return (
    <Link href="/user-profile">
      <a>
        <div className={`relative w-12 h-12 cursor-pointer`}>
          <Image 
              src={imageUrl || '/images/avatar.jpg'}
              alt="Imagem da tela de autenticação" 
              layout="fill"
              objectFit="cover"
              className={`rounded-full`}
              title={name || ''}
          />
        </div>
      </a>          
    </Link>
  )
}
