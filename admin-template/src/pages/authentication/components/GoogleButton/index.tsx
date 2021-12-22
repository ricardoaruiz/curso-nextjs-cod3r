import React from 'react'
import { GoogleIcon } from '../../../../components'
import { GoogleButtonProps } from './types'

export const GoogleButton: React.VFC<GoogleButtonProps> = (props) => {
  return (
    <button 
      type="button"
      className={`
        flex justify-center items-center
        bg-red-600
        hover:bg-red-400
        active:bg-red-200
        active:text-red-600
        focus:border-red-800
        text-white
        w-full px-4 py-3
        outline-none
        rounded-full            
        border
        boder-indigo-500            
        text-sm
        sm:text-base
      `}
      {...props}
  >
      <span className={`
          mr-2 
      `}>Entrar com o Google</span>

      <GoogleIcon 
        className={`w-5`}
      />
    </button>
  )
}
