import { BASE_URL } from "@env";
import { IPopularMoviesEntity } from "../../entities/IPopularMovies-entity";
import { params } from "../../utils/config/fetchParams";
import { IPopularMoviesResponse } from "../../interfaces/movies-interfaces";
import { toEntityMappers } from "../../utils/mapping/toEntityMappers";

interface Options {
  page?: number,
  limit?: number
}

export const getPopularMoviesService = async (options?: Options): Promise<IPopularMoviesEntity[]> => {
  try {
    const result = await fetch(BASE_URL + "/movie/popular" + params + `page=${options?.page ?? 1}`);
    const data: IPopularMoviesResponse = await result.json();
    return  data.results.map(toEntityMappers.PopularMoviesMapper);
  } catch (error) {
    throw new Error ("Error al obtener las peliculas - Popular " + error)
  }
};
