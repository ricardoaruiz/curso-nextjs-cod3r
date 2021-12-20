import QuestionModel from '../../model/Question'

export type QuestionProps = {
    data: QuestionModel
    time: number
    isPlaying?: boolean,
    onTimeout: () => void
    onResponse: (index: number) => void
}