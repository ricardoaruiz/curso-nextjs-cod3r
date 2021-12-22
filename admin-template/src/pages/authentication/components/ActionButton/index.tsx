import React from 'react'
import { ActionButtonProps } from './types'

export const ActionButton: React.VFC<ActionButtonProps> = ({ isSignin, ...props }) => {
  return (
    <button 
        type="button"
        className={`
            w-full
            bg-indigo-500
            hover:bg-indigo-400
            text-white
            rounded-full
            px-4 py-3
            mt-6
            text-sm
            sm:text-base
        `}
        { ...props }
    >
        {isSignin
            ? 'Entrar' 
            : 'Cadastrar'
        }
    </button>
  )
}
