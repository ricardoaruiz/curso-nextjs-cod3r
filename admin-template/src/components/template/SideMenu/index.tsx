import React from 'react'
import { BellIcon, ExitIcon, HomeIcon, SettingsIcon } from '../../icons'
import Logo from '../Logo'
import { MenuItem } from './MenuItem'

import { SideMenuProps } from './types'

export const SideMenu: React.VFC<SideMenuProps> = () => {
  return (
    <aside className={`
      flex flex-col w-32
      bg-gray-200 text-gray-700
      dark:bg-gray-900 dark:text-gray-200
    `}>

      {/* Logo */}
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20
      `}>
        <Logo />
      </div>

      {/* Items Menu */}
      <ul className={`flex-grow py-0.5`}>
        <MenuItem 
          href="/" 
          label="Início" 
          icon={HomeIcon} 
        />
        <MenuItem 
          href="/settings" 
          label="Ajustes" 
          icon={SettingsIcon} 
        />
        <MenuItem 
          href="/notifications" 
          label="Notificações" 
          icon={BellIcon} 
        />
      </ul>

      {/* Last Item Menu */}
      <ul className={`py-0.5`}>
        <MenuItem 
          label="Sair" 
          icon={ExitIcon} 
          onClick={() => console.log('vai deslogar...')}
          className={`
            dark:text-red-400 
            dark:hover:text-white
            
            text-red-600 
            hover:bg-red-400 
            hover:text-white
          `}
        />
      </ul>
    </aside>
  )
}
