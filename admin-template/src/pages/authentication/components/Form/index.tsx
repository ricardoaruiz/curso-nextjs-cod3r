import React from 'react'

import { AuthData } from './types'
import { AuthInput } from '../../../../components/auth/AuthInput/inedex'
import { Title } from '../Title'
import { GoogleButton } from '../GoogleButton'
import { ActionButton } from '../ActionButton'
import { ToggleFormMode } from '../ToggleFormMode'

const initialState: AuthData = {
  email: '',
  password: '',
  passwordConfirmation: ''
}

export const Form: React.VFC = () => {

  const [mode, setMode] = React.useState<'signin' | 'signup'>('signin')
  const [authData, setAuthData] = React.useState<AuthData>(initialState)

  /**
   * Form mode
   */
  const isSignin = React.useMemo(() => {
    return mode === 'signin'
  }, [mode])

  /**
   * Handle input changes
   */
  const handleInputChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthData(state => ({ ...state, [event.target.id]: event.target.value }))
  }, [])

  /**
   * Validate and submit data
   */  
  const submitData = React.useCallback(() => {
    if (isSignin) {
        return console.log('vai logar com...', JSON.stringify(authData, null, 2))
    }
    console.log('vai cadastrar com...', JSON.stringify(authData, null, 2))
  }, [authData, isSignin])

  return (
    <div className={`
            flex flex-col justify-center items-center
            w-full
            px-4
            sm:max-w-sm
            sm:px-2
            mx-auto
            h-screen
    `}>
        <Title 
          isSignin={isSignin}
        />

        <AuthInput 
            label="E-mail" 
            id="email" 
            value={authData.email} 
            onChange={handleInputChange}
            autoComplete='off'
        />

        <AuthInput 
            label="Senha" 
            type="password"
            id="password" 
            value={authData.password} 
            onChange={handleInputChange}
            autoComplete='off'
        />

        <AuthInput 
            label="Confirmação de Senha" 
            type="password"
            id="passwordConfirmation" 
            value={authData.passwordConfirmation} 
            onChange={handleInputChange}
            isShow={!isSignin}
            autoComplete='off'
        />

        <ActionButton 
          onClick={submitData} 
        />

        <hr className={`
            my-6
            border-x-gray-300
            w-full
        `} />

        <GoogleButton 
          onClick={() => console.log('google button clicked')}
        />
        
        <ToggleFormMode 
          mode={mode}
          onClick={setMode}
        />
    </div>
  )
}
