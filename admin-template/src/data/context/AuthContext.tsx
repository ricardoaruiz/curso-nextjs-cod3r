import React, { createContext } from 'react'
import { useRouter } from 'next/router'

import User from '../../model/User'
import firebase from '../../firebase/config'

type AuthContextData = {
  user: User | null
  googleLogin: () => Promise<void>
}

const normalizeUser = async (firebaseUser: firebase.User | null): Promise<User | null> => {
  
  if (!firebaseUser) return null

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

export const AuthContext = createContext({} as AuthContextData)

export const AuthContextProvider: React.FC = ({ children }) => {

  const router = useRouter()
  const [user, setUser] = React.useState<User | null>(null)

  const googleLogin = React.useCallback(async (): Promise<void> => {
    console.log('logando no google...')
    const resp = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider
    )

    const normalizedUser = await normalizeUser(resp.user)
    if (normalizedUser) {
      setUser(normalizedUser)
      router.push('/')
    }
  }, [router])

  const authContextData: AuthContextData = {
    user,
    googleLogin
  }

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}