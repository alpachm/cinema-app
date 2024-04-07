import { BASE_URL } from "@env";
import { IDetailMovieEntity } from "../../entities/IDetailMovie-entity";
import { params } from "../../utils/config/fetchParams";
import { IMovieByIDResponse } from "../../interfaces/movie-interfaces";
import { ToEntityMappers } from "../../utils/mapping/movies/toEntityMappers";

export const getMovieIdService = async (
  movieId: number
): Promise<IDetailMovieEntity> => {
  try {
    const result = await fetch(BASE_URL + `/movie/${movieId}` + params);
    const data: IMovieByIDResponse = await result.json();
    return ToEntityMappers.detailMovieMapper(data);
  } catch (error) {
    throw new Error("Error al obtener la pelicula por ID " + error);
  }
};
