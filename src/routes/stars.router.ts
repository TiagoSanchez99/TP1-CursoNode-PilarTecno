import { Router } from "express";
import { getStarsController } from "../controller/getStars.controller";
import { getStarByIdController } from "../controller/getStarById.controller";
import { createStarController } from "../controller/createStar.controller";
import { validateStarBody } from "../middlewares/validationMiddleware"

const router = Router();    

// basepath --> /stars

router.get('/', getStarsController)

router.get('/:id', getStarByIdController)

router.post('/', validateStarBody, createStarController)

export {
    router
}