import Link from 'next/link'
import React from 'react'

import styles from './styles.module.css'

export type MenuItemProps = {
    href: string
    label: string
}

export const MenuItem: React.VFC<MenuItemProps> = ({ href, label }) => {
    return (
        <li className={styles.item}>
            <Link href={href} passHref>
                <a>{label}</a>
            </Link>
        </li>
    )
}

