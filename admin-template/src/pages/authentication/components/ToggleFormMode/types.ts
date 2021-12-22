import { FormMode } from "../Form/types"

export type ToggleFormModeProps = {
  mode: FormMode
  onClick: (mode: FormMode) => void
}