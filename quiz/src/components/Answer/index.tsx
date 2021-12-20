import React from 'react'
import AnswerModel from '../../model/Answer'

import styles from './styles.module.css'

type AnswerProps = {
    data: AnswerModel
    index: number
    letter: string
    letterBgColor: string
    onClick: (index: number) => void
}

export const Answer: React.VFC<AnswerProps> = ({ 
    data, 
    index, 
    letter, 
    letterBgColor, 
    onClick 
}) => {

    const answerContentClasses = `
        ${styles['answer-content']}
        ${data.isReveled ? styles['answer-reveled'] : ''}
    `

    return (
        <div 
            className={styles.answer} 
            onClick={() => onClick(index)}
        >
            <div className={answerContentClasses}>

                {/* Front card */}
                {/* {!data.isReveled && ( */}
                    <div className={styles['answer-font-card']}>
                        <div 
                            className={styles['answer-letter']} 
                            style={{ backgroundColor: letterBgColor }}
                        >
                            {letter}
                        </div>

                        <div 
                            className={styles['answer-value']}
                        >
                            {data.value}
                        </div>
                    </div>
                {/* )} */}

                {/* Back card */}
                {/* {data.isReveled && ( */}
                    <div 
                        className={styles['answer-back-card']}
                    >
                        {data.isCorrect && (
                            <div className={styles['answer-correct']}>
                                <div>A resposta certa é...</div>
                                <div className={styles.value}>
                                    {data.value}
                                </div>
                            </div>
                        )}
                        {!data.isCorrect && (
                            <div className={styles['answer-wrong']}>
                                <div>A resposta informada está errada...</div>
                                <div className={styles.value}>
                                    {data.value}
                                </div>                            
                            </div>
                        )}
                    </div>
                {/* )} */}
            </div>
        </div>
    )
}


