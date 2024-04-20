import { IBasicSerieInfoEntity } from "../../entities/IBasicSerieInfo-entity";
import { params } from "../../utils/config/fetchParams";
import { IGetOnTheAirSeriesResult } from "../../interfaces/series-interfaces";
import { ToEntityMappers } from "../../utils/mapping/series/toEntityMappers";

export const getOnTheAirSeriesService = async ():Promise<IBasicSerieInfoEntity[]> => {
    try {
        const result = await fetch(process.env.EXPO_PUBLIC_BASE_URL + "/tv/on_the_air" + params);
        const data: IGetOnTheAirSeriesResult = await result.json();
        return data.results.map(ToEntityMappers.onTheAirSerieMapper);

    } catch (error) {
        throw new Error("Error al obtener las series - on the air " + error);
    }
}