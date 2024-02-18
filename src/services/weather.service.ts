
import axios from "axios";
import {IMainData} from "../types/main.type";
import {configs} from "../configs/config";
import {ApiError} from "../errors/api.error";



class WeatherService {
    public async getWeatherByCity(city: string):Promise<IMainData> {
        try {
            const response = await axios.get(
                `${configs.API_LINK}?q=${city}&appid=${configs.API_KEY}`,
            );
            return response.data;
        } catch (e) {
            throw new ApiError(e.error, e.message);
        }
    }
    public async getWeatherByCoord(lat: string, lon: string):Promise<IMainData> {
        try {
            const response = await axios.get(
                `${configs.API_LINK}?lat=${lat}&lon=${lon}&appid=${configs.API_KEY}`,
            );
            return response.data;
        } catch (e) {
            throw new ApiError(e.error, e.message);
        }
    }
}

export const weatherService = new WeatherService()