import React, { createContext } from 'react'
import { useRouter } from 'next/router'

import { AuthContextData, AuthData } from './types'
import User from '../../../model/User'
import { AUTH_COOKIE_KEY, normalizeUser, manageAuthCookie, getCookie } from './utils'
import firebase from '../../../firebase/config'

export const AuthContext = createContext({} as AuthContextData)

export const AuthContextProvider: React.FC = ({ children }) => {

  const router = useRouter()
  
  const [user, setUser] = React.useState<User | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)

  /**
   * Configure a new session on login and logout
   */
  const setupSession = React.useCallback(async (firebaseUser: firebase.User | null): Promise<string | null | undefined> => {
    if(firebaseUser?.email) {
      const user = await normalizeUser(firebaseUser)
      setUser(user)
      manageAuthCookie(true)
      setIsLoading(false)
      return user.email
    }

    setUser(null)
    manageAuthCookie(false)
    setIsLoading(false)
    return null
  }, [])


  /**
   * Create new user on firebase with email and password
   */
  const createUser = React.useCallback(async (authData: AuthData): Promise<void> => {
    try {
      setIsLoading(true)

      const userCredentials = await firebase.auth().createUserWithEmailAndPassword(
        authData.email, 
        authData.password
      )

      const isLogged = await setupSession(userCredentials.user)

      if (isLogged) {
        router.push('/')
        return
      }

    } catch(error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/weak-password') {
        throw new Error('A senha não é muito segura') 
      }
      if (errorCode === 'auth/email-already-in-use') {
        throw new Error('O e-mail informado já está em uso')
      }
      if (errorCode === 'auth/invalid-email') {
        throw new Error('O e-mail informado é inválido')
      }
      
      throw new Error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }, [router, setupSession])

  /**
   * Perform login with email and password on firebase
   */
  const emailAndPasswordLogin = React.useCallback(async (authData: AuthData) => {
    try {
      setIsLoading(true)
      const { email, password } = authData
      
      const userCredentials = await firebase.auth().signInWithEmailAndPassword(email, password)
      
      const isLogged = await setupSession(userCredentials.user)

      if (isLogged) {
        router.push('/')
        return
      }

      throw new Error("Can't authenticate user")

    } catch(error: any) {
      
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
        throw new Error('Usuário ou senha inválidos')
      }

      throw new Error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }, [router, setupSession])

  /**
   * Perform google login on firebase
   */
  const googleLogin = React.useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true)

      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider
      )
  
      const isLogged = await setupSession(resp.user)

      if (isLogged) {
        router.push('/')
        return
      }

      throw new Error("Can't authenticate user")

    } catch(error: any) {
      throw new Error(error.message)
    } finally {
      setIsLoading(false)
    }
  }, [router, setupSession])

  /**
   * Perform system logout
   */
  const logout = React.useCallback(async () => {
    try {
      setIsLoading(true)
      await firebase.auth().signOut()
      await setupSession(null)
    } finally {
      setIsLoading(false)
    }
  }, [setupSession])

  /**
   * Listn firebase token changes to persist login on page refresh (F5)
   */
  React.useEffect(() => {
    if (getCookie(AUTH_COOKIE_KEY)) {
      const onIdTokenChangedCancelFunction = firebase.auth().onIdTokenChanged(setupSession)
  
      return () => onIdTokenChangedCancelFunction()
    } else {
      setIsLoading(false)
    }
  }, [setupSession])

  /**
   * Data to be returned from context
   */
  const authContextData: AuthContextData = {
    user,
    isLoading,
    createUser,
    emailAndPasswordLogin,
    googleLogin,
    logout
  }

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}