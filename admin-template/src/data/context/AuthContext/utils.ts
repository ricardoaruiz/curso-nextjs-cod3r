import Cookies from 'js-cookie'
import firebase from '../../../firebase/config'

import User from '../../../model/User'

/**
 * Auth cookie key
 */
export const AUTH_COOKIE_KEY = 'admin-template-auth'

/**
 * Transform a firebase user to system user
 * @param firebaseUser 
 * @returns 
 */
export const normalizeUser = async (firebaseUser: firebase.User): Promise<User> => {
  
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

/**
 * Manage auth cookie
 * @param isLogged 
 * @returns 
 */
export const manageAuthCookie = (isLogged: boolean) => {
  if (isLogged) {
    return Cookies.set(AUTH_COOKIE_KEY, isLogged ? 'true' : 'false', { 
      expires: 7 //days
    })
  }
  Cookies.remove(AUTH_COOKIE_KEY)
}

/**
 * Get a specific cookie by key
 * @param cookieKey 
 * @returns 
 */
export const getCookie = (cookieKey: string) => {
  return Cookies.get(AUTH_COOKIE_KEY)
}