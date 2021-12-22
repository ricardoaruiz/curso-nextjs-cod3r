import React from 'react'
import { GoogleIcon } from '../../../../components'
import { GoogleButtonProps } from './types'

export const GoogleButton: React.VFC<GoogleButtonProps> = (props) => {
  return (
    <button 
      type="button"
      className={`
          flex justify-center items-center
          w-full
          bg-red-500
          hover:bg-red-400
          text-white
          rounded-full
          px-4 py-3                    
          text-sm
          sm:text-base
      `}
      {...props}
  >
      <span className={`
          mr-2 
      `}>Entrar com o Google</span>

      <GoogleIcon 
        className={`h-8`}
      />
    </button>
  )
}
