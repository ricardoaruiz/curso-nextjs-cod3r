import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { AvatarProps } from './types'
export const Avatar: React.VFC<AvatarProps> = ({ imageUrl }) => {
  return (
    <div className={`relative w-12 h-12`}>
      <Link href="/user-profile" passHref>
        <a>
          <Image 
              src={imageUrl || '/images/avatar.jpg'}
              alt="Imagem da tela de autenticação" 
              layout="fill"
              objectFit="cover"
              className={`rounded-full`}
          />
        </a>
      </Link>
    </div>
  )
}
