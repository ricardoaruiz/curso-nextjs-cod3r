import React from 'react'

import styles from './styles.module.css'

type DescriptionProps = {
    text: string
}

export const Description: React.FC<DescriptionProps> = ({ text }) => {
    return (
        <div className={styles.description}>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    )
}


