interface AnswerData {
    value: string
    isCorrect: boolean
    isReveled: boolean    
}

export default class AnswerModel implements AnswerData {

    #value: string
    #isCorrect: boolean
    #isReveled: boolean

    constructor(value: string, isCorrect: boolean, isReveled = false) {
        this.#value = value
        this.#isCorrect = isCorrect
        this.#isReveled = isReveled
    }

    public static correct(value: string) {
        return new AnswerModel(value, true)
    }

    public static wrong(value: string) {
        return new AnswerModel(value, false)
    }

    public reveal() {
        return new AnswerModel(this.#value, this.#isCorrect, true)
    }

    get value() {
        return this.#value
    }

    get isCorrect() {
        return this.#isCorrect
    }

    get isReveled() {
        return this.#isReveled
    }

    public toObject() {
        return {
            value: this.#value,
            isCorrect: this.#isCorrect,
            isReveled: this.#isReveled
        }
    }

    public static fromObject(answerObj: AnswerData): AnswerModel {
        return new AnswerModel(
            answerObj.value, 
            answerObj.isCorrect, 
            answerObj.isReveled
        )
    }

}