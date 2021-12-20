import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import { TimerProps } from './types'

import styles from './styles.module.css'

export const Timer: React.VFC<TimerProps> = ({ key, duration, isPlaying = true, onComplete }) => {
    return (
        <div className={styles.timer}>
            <CountdownCircleTimer
                key={key}
                isPlaying={isPlaying}
                duration={duration}
                onComplete={onComplete}
                colors={[
                    ['#BCE596', 0.33],
                    ['#F7B801', 0.33],
                    ['#ED827A', 0.33],
                ]}
                size={120}
            >
                {({ remainingTime }) => <div className={styles.time}>{remainingTime}</div>}
            </CountdownCircleTimer>    
        </div>
    )
}


