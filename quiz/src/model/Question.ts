import AnswerModel from "./Answer"

interface QuestionData {
    id: number
    question: string
    answers: AnswerModel[]
    isCorrect: boolean
}

export default class QuestionModel implements QuestionData {

    #id: number
    #question: string
    #answers: AnswerModel[]
    #isCorrect: boolean

    constructor(id: number, question: string, answers: AnswerModel[], isCorrect = false) {
        this.#id = id
        this.#question = question
        this.#answers = answers
        this.#isCorrect = isCorrect
    }

    get id() {
        return this.#id
    }

    get question() {
        return this.#question
    }

    get answers() {
        return this.#answers
    }

    get isCorrect() {
        return this.#isCorrect
    }

    get isWrong() {
        return !this.isCorrect
    }

    get isAnswered() {        
        return this.#answers.some(answer => answer.isReveled)
    }

    public answerWith(selectedAnswerIndex: number): QuestionModel {
        const isCorrect = this.#answers[selectedAnswerIndex]?.isCorrect
        
        const answers = this.#answers.map((answer, index) => 
            index === selectedAnswerIndex || answer.isCorrect || answer.isReveled
                ? answer.reveal()
                : answer 
        )

        return new QuestionModel(this.#id, this.#question, answers, isCorrect)
    }

    public scrambleAnswers(): QuestionModel {
        const scrambledAnswers = this.#answers
            .map(answer => ({ ...answer.toObject(), random: Math.random() }))
            .sort((answer1, answer2) => answer1.random - answer2.random)
            .map(({ value, isCorrect, isReveled  }) => {
                return new AnswerModel(value, isCorrect, isReveled)
            })

        return new QuestionModel(this.#id,this.#question, scrambledAnswers, this.#isCorrect)
    }

    public toObject() {
        return {
            id: this.#id,
            question: this.#question,
            answers: this.#answers.map(answer => answer.toObject()),
            isCorrect: this.#isCorrect,
            isWrong: this.isWrong,
            isAnswered: this.isAnswered
        }
    }

    public static fromObject(questionObj: QuestionData): QuestionModel {
        return new QuestionModel(
            questionObj.id, 
            questionObj.question, 
            questionObj.answers.map(({ value, isCorrect, isReveled }) => AnswerModel.fromObject({ value, isCorrect, isReveled })),
            questionObj.isCorrect
        )
    }

}