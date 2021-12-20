import React from 'react'

import { QuizProps } from './types'

import styles from './styles.module.css'
import { Button, Question } from '..'

export const Quiz: React.FC<QuizProps> = ({ 
    question, 
    questionTime = 10,
    isLastQuestion, 
    onResponseQuestion, 
    goToNextQuestion 
}) => {

    const receivedAnswer = React.useCallback((index: number) => {
        !question.isAnswered && onResponseQuestion(question.answerWith(index))
    }, [onResponseQuestion, question])

    return question ? (
            <div className={styles.quiz}>

                <Question 
                    data={question} 
                    time={questionTime} 
                    onResponse={receivedAnswer}
                    onTimeout={goToNextQuestion}
                />

                <div className={styles.actions}>
                    <Button onClick={goToNextQuestion}>
                        {isLastQuestion ? 'Finalizar' : 'Próxima'}
                    </Button>
                </div>
                
            </div>
        ) : null
}

