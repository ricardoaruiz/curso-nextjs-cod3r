import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import { Menu, MenuProps } from '../../components'

type LayoutProps = {
    title: string,
    description?: string
}

import styles from './styles.module.css'

const menu: MenuProps = {
    items: [
        { label: 'Estático #1', href: '/static1' },
        { label: 'Estático #2', href: '/static2' },
        { label: 'Estático #3', href: '/static3' },
        { label: 'Estático #4', href: '/static4' },
        { label: 'Dinâmico #1', href: '/dynamic1' },
        { label: 'Dinâmico #2', href: '/products' },
    ]
}

export const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                {description && <meta name="description" content={description} />}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu { ...menu } />

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

