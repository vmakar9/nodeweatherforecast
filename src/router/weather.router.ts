import {Router} from "express"
import {weatherController} from "../contoller/weather.controller";




const router = Router()

router.get('/city/:city',
    weatherController.getWeatherByCity)

router.get('/coord/:lat/:lon',
    weatherController.getWeatherByCoord)

export const weatherRouter = router