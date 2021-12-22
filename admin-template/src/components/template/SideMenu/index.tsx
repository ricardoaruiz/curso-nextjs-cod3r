import React from 'react'
import { useRouter } from 'next/router'

import { BellIcon, ExitIcon, HomeIcon, SettingsIcon } from '../../icons'
import Logo from '../Logo'
import { MenuItem } from './MenuItem'
import { useAuthContext } from '../../../data'

import { SideMenuProps } from './types'

export const SideMenu: React.VFC<SideMenuProps> = () => {

  const { logout } = useAuthContext()
  const router = useRouter()

  const logoff = React.useCallback(() => {
    logout()
    router.push('/authentication')
  }, [logout, router])

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
          onClick={logoff}
          className={`
          text-red-600 
          hover:bg-red-400 
          hover:text-white
          dark:hover:text-white            
          dark:text-red-500
          `}
        />
      </ul>
    </aside>
  )
}
