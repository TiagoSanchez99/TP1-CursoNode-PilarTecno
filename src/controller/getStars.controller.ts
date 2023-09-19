import { Request, Response } from "express";
import starData from '../data/stars.json'

export async function getStarsController (req: Request, res: Response) {
    const name = req.query.name as string
    let stars = starData
    if (name) {
        stars = starData.filter((star) => star.name.includes(name))
    }
    res.status(200).json(stars)
}