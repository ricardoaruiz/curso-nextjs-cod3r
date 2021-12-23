export type FormMode = 'signin' | 'signup'

export type FormData = {
  mode?: FormMode
  onModeChange?: (mode: FormMode) => void
}
export type AuthData = {
  email: string
  password: string
  passwordConfirmation?: string
}