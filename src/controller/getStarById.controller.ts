import { Request, Response } from "express";
import starData from '../data/stars.json'

export async function getStarByIdController (req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const star = starData.find((star) => star.id === id)
    if (!star) {
        res.status(404).json(
            {
                error: 'STAR_NOT_FOUND',
                message: `Star con un id:${id}, no se encuentra en database`
            }
        )
    }
    res.status(200).json(star)
}