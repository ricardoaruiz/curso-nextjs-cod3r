import React from 'react'

import styles from './styles.module.css'

export const Gift = () => {
    return (
        <div className={styles.gift}>
            <div className={styles.top}></div>
            <div className={styles.body}></div>
            <div className={styles['ribbon-bow-v']}></div>
            <div className={styles['ribbon-bow-h']}></div>
        </div>
    )
}

