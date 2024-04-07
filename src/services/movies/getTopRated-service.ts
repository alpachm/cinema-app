import { BASE_URL } from "@env";
import { IBasicMovieInfoEntity } from "../../entities/IBasicMovieInfo-entity";
import { params } from "../../utils/config/fetchParams";
import { ITopRatedMoviesResponse } from "../../interfaces/movies-interfaces";
import { ToEntityMappers } from "../../utils/mapping/movies/toEntityMappers";

interface Options {
  page?: number;
  limit?: number;
}

export const getTopRatedMoviesServices = async (
  options?: Options
): Promise<IBasicMovieInfoEntity[]> => {
  try {
    const result = await fetch(
      BASE_URL + "/movie/top_rated" + params + `page=${options?.page ?? 1}`
    );
    const data: ITopRatedMoviesResponse = await result.json();
    return data.results.map(ToEntityMappers.topRatedMovieMapper);
  } catch (error) {
    throw new Error("Error al obtener las peliculas - topRated " + error);
  }
};
