import { NextFunction, Request, Response } from "express";
import Joi from 'joi'

export function validateStarBody(req: Request, res: Response, next: NextFunction) {
    const { body } = req
    const schema = Joi.object({
        id: Joi.number().required(),
        name: Joi.string().required(),
        type: Joi.string().required(),
        distancia: Joi.string().required(),
        mass: Joi.string().required(),
        radius: Joi.string().required(),
        temperature: Joi.string().required(),
        luminosity: Joi.string().required(),
        age: Joi.string().required(),
        composition: Joi.object().required(),
        stellar_history: Joi.string().required(),
        alias: Joi.string()
    })

    const { error, value } = schema.validate(body)
    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        })
    }
    next()
}