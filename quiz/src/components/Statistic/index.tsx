import React from 'react'

import { StatisticProps } from './types'

import styles from './styles.module.css'

export const Statistic: React.VFC<StatisticProps> = ({ 
    value, 
    text, 
    backgroundColor = '#FDD60F', 
    color = "#333" 
}) => {

    return (
        <div className={styles.statistic}>
            <div 
                className={styles.value}
                style={{
                    backgroundColor,
                    color
                }}
            >
                {value}
            </div>

            <div className={styles.text}>
                {text}
            </div>

        </div>
    )
}


