import React, { createContext } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import User from '../../model/User'
import firebase from '../../firebase/config'

type AuthContextData = {
  user: User | null
  isLoading: boolean
  googleLogin: () => Promise<void>
  logout: () => Promise<void>
}

const AUTH_COOKIE_KEY = 'admin-template-auth'

const normalizeUser = async (firebaseUser: firebase.User): Promise<User> => {
  
  const token = await firebaseUser.getIdToken()

  const { 
    uid, 
    email, 
    displayName, 
    providerData, 
    photoURL 
  } = firebaseUser

  return {
    uid,
    email,
    name: displayName,
    token,
    provider: providerData[0]?.providerId,
    imageUrl: photoURL
  }
}

const manageAuthCookie = (isLogged: boolean) => {
  if (isLogged) {
    return Cookies.set(AUTH_COOKIE_KEY, isLogged ? 'true' : 'false', { 
      expires: 7 //days
    })
  }
  Cookies.remove(AUTH_COOKIE_KEY)
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthContextProvider: React.FC = ({ children }) => {

  const router = useRouter()
  const [user, setUser] = React.useState<User | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)

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

  const googleLogin = React.useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true)
      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider
      )
  
      const isLogged = await setupSession(resp.user)
      isLogged ? router.push('/') : alert('deu algum erro')
    } finally {
      setIsLoading(false)
    }
  }, [router, setupSession])

  const logout = React.useCallback(async () => {
    try {
      setIsLoading(true)
      await firebase.auth().signOut()
      await setupSession(null)
    } finally {
      setIsLoading(false)
    }
  }, [setupSession])

  React.useEffect(() => {
    if (Cookies.get(AUTH_COOKIE_KEY)) {
      const onIdTokenChangedCancelFunction = firebase.auth().onIdTokenChanged(setupSession)
  
      return () => onIdTokenChangedCancelFunction()
    } else {
      setIsLoading(false)
    }
  }, [setupSession])

  const authContextData: AuthContextData = {
    user,
    isLoading,
    googleLogin,
    logout
  }

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}