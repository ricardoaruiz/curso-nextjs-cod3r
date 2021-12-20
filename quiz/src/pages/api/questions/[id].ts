import { NextApiRequest, NextApiResponse } from "next";

import questionsDB from '../questionsDB'

export default function Questions(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            load(req, res)
            break
        default:
            return res.status(405).send(null)
    }
}

function load(req: NextApiRequest, res: NextApiResponse) {
    const id = +req.query.id
    const foundQuestion = questionsDB.find(question => question.id === id)
    
    foundQuestion
        ? res.status(200).json(foundQuestion.scrambleAnswers().toObject())
        : res.status(204).send(null)
}