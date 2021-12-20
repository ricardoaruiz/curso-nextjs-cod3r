import { NextApiRequest, NextApiResponse } from "next";

import questionsDB from '../questionsDB'

export default function Quiz(req: NextApiRequest, res: NextApiResponse) {
    
    switch (req.method) {
        case 'GET':
            listAllQuestions(req, res)
            break
        default:
            return res.status(405).send(null)
    }
}

function listAllQuestions(req: NextApiRequest, res: NextApiResponse) {
    const scrambledQuestionIds = questionsDB.map(question => ({ ...question.toObject(), random: Math.random() }))
        .sort((question1, question2) => question1.random - question2.random)
        .map(question => question.id)

    res.status(200).json(scrambledQuestionIds)
}