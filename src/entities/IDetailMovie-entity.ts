import { Genre } from "../interfaces/movie-interfaces";
import { IBasicMovieInfoEntity } from "./IBasicMovieInfo-entity";

export interface IDetailMovieEntity extends IBasicMovieInfoEntity {
  description: string;
  genres: Genre[];
  year: string;
}
