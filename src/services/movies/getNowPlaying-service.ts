import { BASE_URL } from "@env";
import { params } from "../../utils/config/fetchParams";
import { INowPlayingMoviesResponse } from "../../interfaces/movies-interfaces";
import { INowPlayingMoviesEntity } from "../../entities/INowPlayingMovies-entity";
import { toEntityNowPlayingMovieMapper } from "../../utils/mapping/toEntityNowPlayingMovieMapper";

export const getNowPlayingMoviesService = async (): Promise<
  INowPlayingMoviesEntity[]
> => {
  try {
    const result = await fetch(BASE_URL + `/movie/now_playing` + params);
    const data: INowPlayingMoviesResponse = await result.json();
    return data.results.map(toEntityNowPlayingMovieMapper);
  } catch (error) {
    throw new Error("Error al obtener las peliculas - now playing" + error);
  }
};
