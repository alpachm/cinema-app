import { BASE_URL } from "@env";
import { IBasicMovieInfoEntity } from "../../entities/IBasicMovieInfo-entity";
import { params } from "../../utils/config/fetchParams";
import { IUpcomingMoviesResponse } from "../../interfaces/movies-interfaces";
import { ToEntityMappers } from "../../utils/mapping/movies/toEntityMappers";

interface Options {
  page?: number;
  limit?: number;
}

export const getUpcomingMoviesService = async (
  options?: Options
): Promise<IBasicMovieInfoEntity[]> => {
  try {
    const result = await fetch(
      BASE_URL + "/movie/upcoming" + params + `page=${options?.page ?? 1}`
    );
    const data: IUpcomingMoviesResponse = await result.json();
    return data.results.map(ToEntityMappers.upcomingMovieMapper);
  } catch (error) {
    throw new Error("Error al obtener las peliculas - upcoming " + error);
  }
};
