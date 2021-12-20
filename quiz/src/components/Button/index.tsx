import React from 'react'
import { ButtonProps } from './types'

import styles from './styles.module.css'
import Link from 'next/link'

export const Button: React.FC<ButtonProps> = ({ children, href, ...props }) => {

    const renderButton = React.useCallback(() => {
        return (
            <button type="button" { ...props } className={styles.button}>
                {children}
            </button >    
        )
    }, [children, props])

    return href 
        ? <Link href={href} passHref>{renderButton()}</Link> 
        : renderButton()
}


