import { Genre } from "../interfaces/series-interfaces";
import { IBasicSerieInfoEntity } from "./IBasicSerieInfo-entity";

export interface IDetailMovieEntity extends IBasicSerieInfoEntity {
    description: string;
    genres: Genre[];
    year: string;
  }
  