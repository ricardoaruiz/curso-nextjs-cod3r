export type MenuItemProps = {
  href?: string
  label: string
  icon: JSX.Element
  className?: string
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void
}