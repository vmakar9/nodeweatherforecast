import {ICoord} from "./coord.type";
import {IWeather} from "./weather.type";
import {ITemperature} from "./temperature.type";
import {IWind} from "./wind.type";
import {IClouds} from "./clouds.type";
import {ISys} from "./sys.type";

export interface IMainData {
    coord: ICoord;
    weather: IWeather[];
    base: string;
    main: ITemperature;
    visibility: number;
    wind: IWind;
    clouds: IClouds;
    dt: number;
    sys: ISys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}