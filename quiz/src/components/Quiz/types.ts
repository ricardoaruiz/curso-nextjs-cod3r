import QuestionModel from "../../model/Question";

export type QuizProps = {
    question: QuestionModel
    isLastQuestion: boolean
    questionTime?: number
    onResponseQuestion: (question: QuestionModel) => void
    goToNextQuestion: () => void
}