import React from 'react'

import { MenuItem, MenuItemProps } from './MenuItem'

import styles from './styles.module.css'

export type MenuProps = {
    items: MenuItemProps[]
}

export const Menu: React.VFC<MenuProps> = ({ items }) => {
    return (
        <nav className={styles.nav}>
            <ul>
                {items.map(({ href, label }) => (
                    <MenuItem 
                        key={href} 
                        href={href} 
                        label={label} 
                    />
                ))}
            </ul>
        </nav>
    )
}

