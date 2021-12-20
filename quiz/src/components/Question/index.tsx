import React from 'react'

import { Description } from './components/Description'
import { Answer } from '../Answer'
import { Timer } from '../Timer'
import { QuestionProps } from './types'

import styles from './styles.module.css'

const letters = [
    { value: 'A', color: '#F2C866'},
    { value: 'B', color: '#F266BA'},
    { value: 'C', color: '#85D4F2'},
    { value: 'D', color: '#BCE596'},
]

export const Question: React.FC<QuestionProps> = ({ data, time, isPlaying = true, onTimeout, onResponse }) => {

    const handleAnswerClick = React.useCallback((index: number) => {
        !data.isAnswered && onResponse(index)
    }, [data, onResponse])

    const renderAnswers = React.useCallback(() => {
        return data.answers.map((answer, i) => (
            <Answer 
                key={`${data.id}-${i}`} 
                data={answer}
                index={i}
                letter={letters[i].value}
                letterBgColor={letters[i].color}
                onClick={handleAnswerClick}
            />
        ))
    }, [data, handleAnswerClick])

    return (
        <div className={styles['question-container']}>

            <div className={styles['question-timer']}>
                <Timer 
                    key={data.id}
                    duration={time}
                    isPlaying={isPlaying}
                    onComplete={onTimeout}
                />
            </div>
            
            <div className={styles['question-content']}>
                <Description text={data.question}/>
                {renderAnswers()}
            </div>

        </div>
    )
}


