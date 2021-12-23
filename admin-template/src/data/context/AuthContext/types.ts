import User from '../../../model/User'

export type AuthContextData = {
  user: User | null
  isLoading: boolean
  createUser: (authData: AuthData) => Promise<void>
  emailAndPasswordLogin: (authData: AuthData) => Promise<void>
  googleLogin: () => Promise<void>
  logout: () => Promise<void>
}

export type AuthData = {
  email: string
  password: string
}