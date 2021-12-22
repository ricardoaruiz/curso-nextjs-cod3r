type Mode = 'signin' | 'signup'

export type ToggleFormModeProps = {
  mode: Mode
  onClick: (mode: Mode) => void
}