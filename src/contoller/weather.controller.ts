import {Request,Response,NextFunction} from "express";
import {weatherService} from "../services/weather.service";


class WeatherController {
    public async getWeatherByCity(req: Request, res: Response, next: NextFunction) {
        try {
            const {city} = req.params

            const weatherData = await weatherService.getWeatherByCity(city)
            res.status(200).json(weatherData)
        } catch (e) {
            next(e)
        }
    }
    public async getWeatherByCoord(req: Request, res: Response, next: NextFunction) {
        try {
            const {lat,lon} = req.params

            const weatherData = await weatherService.getWeatherByCoord(lat,lon)
            res.status(200).json(weatherData)
        } catch (e) {
            next(e)
        }
    }

}

export const weatherController = new WeatherController()