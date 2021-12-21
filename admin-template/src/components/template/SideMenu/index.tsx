import React from 'react'
import { BellIcon, ExitIcon, HomeIcon, SettingsIcon } from '../../icons'
import Logo from '../Logo'
import { MenuItem } from './MenuItem'

import { SideMenuProps } from './types'

export const SideMenu: React.VFC<SideMenuProps> = () => {
  return (
    <aside className={`
      flex flex-col
    `}>

      {/* Logo */}
      <div className={`
        flex
        flex-col
        items-center
        justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        w-20
        h-20
      `}>
        <Logo />
      </div>

      {/* Items Menu */}
      <ul className={`flex-grow`}>
        <MenuItem 
          href="/" 
          label="Início" 
          icon={HomeIcon} 
        />
        <MenuItem 
          href="/settings" 
          label="Configurações" 
          icon={SettingsIcon} 
        />
        <MenuItem 
          href="/notifications" 
          label="Notificações" 
          icon={BellIcon} 
        />
      </ul>

      {/* Last Item Menu */}
      <ul>
        <MenuItem 
          label="Sair" 
          icon={ExitIcon} 
          onClick={() => console.log('vai deslogar...')}
          className={`
            text-red-600
            hover:bg-red-400 
            hover:text-white
          `}
        />
      </ul>
    </aside>
  )
}
