import React from 'react'
import { NextPage } from 'next'
import { AuthInput } from '../components/auth/AuthInput/inedex'

type AuthData = {
    email: string
    password: string
    passwordConfirmation?: string
}

const initialState: AuthData = {
    email: '',
    password: '',
    passwordConfirmation: ''
}

const Authentication: NextPage = () => {

    const [mode, setMode] = React.useState<'signin' | 'signup'>('signup')
    const [authData, setAuthData] = React.useState<AuthData>(initialState)
    
    const handleInputChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setAuthData(state => ({ ...state, [event.target.id]: event.target.value }))
    }, [])

    return (
        <div>
            <h1>Autenticação</h1>

            <AuthInput 
                label="E-mail" 
                id="email" 
                value={authData.email} 
                onChange={handleInputChange}
            />

            <AuthInput 
                label="Senha" 
                type="password"
                id="password" 
                value={authData.password} 
                onChange={handleInputChange} 
            />

            <AuthInput 
                label="Confirmação de Senha" 
                type="password"
                id="passwordConfirmation" 
                value={authData.passwordConfirmation} 
                onChange={handleInputChange}
                isShow={mode === 'signup'}
            />
        </div>
    )
}

export default Authentication
