import React from 'react'

import { AuthData, FormData, FormMode } from './types'
import { AuthInput } from '../../../../components/auth/AuthInput/inedex'
import { Title } from '../Title'
import { Error } from '../Error'
import { GoogleButton } from '../GoogleButton'
import { ActionButton } from '../ActionButton'
import { ToggleFormMode } from '../ToggleFormMode'
import { useAuthContext } from '../../../../data'

const initialState: AuthData = {
  email: '',
  password: '',
  passwordConfirmation: ''
}

export const Form: React.VFC<FormData> = ({ onModeChange }) => {

  const { user, googleLogin } = useAuthContext()
  const [mode, setMode] = React.useState<FormMode>('signin')
  const [authData, setAuthData] = React.useState<AuthData>(initialState)
  const [authError, setAuthError] = React.useState<string | undefined>(undefined)

  /**
   * Form mode
   */
  const isSignin = React.useMemo(() => {
    return mode === 'signin'
  }, [mode])

  /**
   * Toggle form mode sigin/signup
   */
  const toggleMode = React.useCallback((mode: FormMode) => {
    setMode(mode)
    setAuthData(initialState)
    setAuthError(undefined)
  }, [])

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
        setAuthError('Ocorreu um erro no login')
        return console.log('vai logar com...', JSON.stringify(authData, null, 2))
    }
    setAuthError('Ocorreu um erro no cadastro')
    console.log('vai cadastrar com...', JSON.stringify(authData, null, 2))
  }, [authData, isSignin])

  /**
   * Perform Google login
   */
  const loginWithGoogle = React.useCallback(() => {
    googleLogin()
  }, [googleLogin])

  React.useEffect(() => {
    onModeChange && onModeChange(mode)
  }, [mode, onModeChange])

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

        <Error
          message={authError}
          onHide={() => setAuthError(undefined)}
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
            w-full my-6
            border-x-gray-300
        `} />

        <GoogleButton 
          onClick={loginWithGoogle}
        />
        
        <ToggleFormMode 
          mode={mode}
          onClick={toggleMode}
        />
    </div>
  )
}
