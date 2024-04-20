import { params } from "../../utils/config/fetchParams";
import { INowPlayingMoviesResponse } from "../../interfaces/movies-interfaces";
import { ToEntityMappers } from "../../utils/mapping/movies/toEntityMappers";
import { IBasicMovieInfoEntity } from "../../entities/IBasicMovieInfo-entity";

export const getNowPlayingMoviesService = async (): Promise<
  IBasicMovieInfoEntity[]
> => {
  try {
    const result = await fetch(process.env.EXPO_PUBLIC_BASE_URL + `/movie/now_playing` + params);
    const data: INowPlayingMoviesResponse = await result.json();
    return data.results.map(ToEntityMappers.nowPlayingMovieMapper);
  } catch (error) {
    throw new Error("Error al obtener las peliculas - now playing" + error);
  }
};
