import { params } from "../../utils/config/fetchParams";
import { IPopularMoviesResponse } from "../../interfaces/movies-interfaces";
import { ToEntityMappers } from "../../utils/mapping/movies/toEntityMappers";
import { IBasicMovieInfoEntity } from "../../entities/IBasicMovieInfo-entity";

interface Options {
  page?: number;
  limit?: number;
}

export const getPopularMoviesService = async (
  options?: Options
): Promise<IBasicMovieInfoEntity[]> => {
  try {
    const result = await fetch(
      process.env.EXPO_PUBLIC_BASE_URL + "/movie/popular" + params + `page=${options?.page ?? 1}`
    );
    const data: IPopularMoviesResponse = await result.json();
    return data.results.map(ToEntityMappers.popularMovieMapper);
  } catch (error) {
    throw new Error("Error al obtener las peliculas - Popular " + error);
  }
};
