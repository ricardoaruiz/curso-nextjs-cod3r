import React from 'react'
import { ActionButtonProps } from './types'

export const ActionButton: React.VFC<ActionButtonProps> = ({ isSignin, ...props }) => {
  return (
    <button 
        type="button"
        className={`
            flex justify-center items-center
            bg-indigo-600
            hover:bg-indigo-400
            active:bg-indigo-200
            active:text-indigo-600
            focus:border-indigo-800
            text-white
            w-full px-4 py-3
            mt-6
            outline-none
            rounded-full            
            border
            boder-indigo-500            
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
