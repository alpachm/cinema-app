import { IBasicSerieInfoEntity } from "../../../entities/IBasicSerieInfo-entity";
import { IOnTheAirSerieData } from "../../../interfaces/series-interfaces";

export class ToEntityMappers {
    static onTheAirSerieMapper(serie: IOnTheAirSerieData): IBasicSerieInfoEntity{
        return {
            id: serie.id,
            title: serie.name,
            poster: `https://image.tmdb.org/t/p/w500${serie.poster_path}`,
            popularity: serie.vote_average,
            isAdult: serie.adult,
        }
    }
}