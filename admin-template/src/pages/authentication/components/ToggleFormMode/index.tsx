import React from 'react'
import { ToggleFormModeProps } from './types'

export const ToggleFormMode: React.VFC<ToggleFormModeProps> = ({ mode = 'singnin', onClick }) => {

  const isSignin = React.useMemo(() => {
    return mode === 'signin'
  }, [mode])

  return (
    <div className={`
        mt-8
        text-center
        text-sm
    `}>
        {isSignin && (
            <p>
                Novo por aqui?
                <a 
                    onClick={() => onClick('signup')} 
                    className={`
                        ml-2
                        cursor-pointer
                        text-blue-500
                        hover:text-blue-700
                    `}
                >
                    Criar uma conta gratuitamente!
                </a>
            </p>
        )}
        {!isSignin && (
            <p>
                Já faz parte da nossa comunidade?
                <a 
                    onClick={() => onClick('signin')} 
                    className={`
                        ml-2
                        cursor-pointer
                        text-blue-500
                        hover:text-blue-700
                    `}
                >
                    Entrar com suas credenciais!
                </a>
            </p>
        )}
    </div>
  )
}
