import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Quiz } from '../components'
import QuestionModel from '../model/Question'

import styles from '../styles/Home.module.css'

const BASE_URL = 'http://localhost:3000/api/'

const Home: NextPage = () => {
  const router = useRouter()
  
  const [questionsId, setQuestionsId] = React.useState<number[]>([])
  const [question, setQuestion] = React.useState<QuestionModel>()
  const [correctAnswers, setCorrectAnswers] = React.useState<number>(0)

  /**
   * Handle a question response event
   */
  const handleResponseQuestion = React.useCallback((answeredQuestion: QuestionModel) => {
    setQuestion(answeredQuestion)
    setCorrectAnswers(state => answeredQuestion.isCorrect ? state + 1 : state)
  }, [])

 /**
   * Load specific question by id
   */
  const loadQuestion = React.useCallback(async (questionId: number) => {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`)
    const question = await resp.json()

    setQuestion(QuestionModel.fromObject(question))
  }, [])

  /**
   * Navigate to next question
   */
  const goToNextQuestion = React.useCallback((nextQuestionId: number) => {
    loadQuestion(nextQuestionId)
  }, [loadQuestion])

  /**
   * Finish the game
   */
  const finishGame = React.useCallback(() => {
    router.push({
      pathname: '/result',
      query: {
        total: questionsId.length,
        corrects: correctAnswers
      }
    })
  }, [correctAnswers, questionsId.length, router])

  /**
   * Get next question id
   */
  const getNextQuestionId = React.useCallback(() => {
    return question ? questionsId[questionsId.indexOf(question.id) + 1] : undefined
  }, [question, questionsId])

  /**
   * Go to next question or finalize quiz
   */
  const goToNextStep = React.useCallback(() => {
    const idNextQuestion = getNextQuestionId()
    idNextQuestion ? goToNextQuestion(idNextQuestion) : finishGame()
  }, [finishGame, getNextQuestionId, goToNextQuestion])

  /**
   * Load all question ids in local state
   */
  React.useEffect(() => {
    const loadQuestionsId = async () => {
      const resp = await fetch(`${BASE_URL}/quiz`)
      const ids = await resp.json()

      setQuestionsId(ids)
    }
    loadQuestionsId()
  }, [])

  /**
   * Load the first question on view
   */
  React.useEffect(() => {
    questionsId.length && loadQuestion(questionsId[0])
  }, [loadQuestion, questionsId])

  return (
    <div className={styles.container}>
      {question ? (
        <Quiz 
          question={question} 
          questionTime={10}
          isLastQuestion={!getNextQuestionId()}
          onResponseQuestion={handleResponseQuestion}
          goToNextQuestion={goToNextStep}
          
        />
      ) : <h1>Carregando questões...</h1>}
    </div>
  )
}

export default Home
