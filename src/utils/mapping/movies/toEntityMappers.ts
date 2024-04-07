import { IBasicMovieInfoEntity } from "../../../entities/IBasicMovieInfo-entity";
import { IDetailMovieEntity } from "../../../entities/IDetailMovie-entity";
import { IMovieByIDResponse } from "../../../interfaces/movie-interfaces";
import {
  ITopRatedMovie,
  IUpcomingMovie,
  NowPlayingMovie,
  popularMovie,
} from "../../../interfaces/movies-interfaces";

export class ToEntityMappers {
  static nowPlayingMovieMapper(movie: NowPlayingMovie): IBasicMovieInfoEntity {
    return {
      id: movie.id,
      title: movie.title,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      popularity: movie.vote_average,
      isAdult: movie.adult,
    };
  }

  static popularMovieMapper(movie: popularMovie): IBasicMovieInfoEntity {
    return {
      id: movie.id,
      title: movie.title,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      popularity: movie.vote_average,
      isAdult: movie.adult,
    };
  }

  static topRatedMovieMapper(movie: ITopRatedMovie): IBasicMovieInfoEntity {
    return {
      id: movie.id,
      title: movie.title,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      popularity: movie.vote_average,
      isAdult: movie.adult,
    };
  }

  static upcomingMovieMapper(movie: IUpcomingMovie): IBasicMovieInfoEntity {
    return {
      id: movie.id,
      title: movie.title,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      popularity: movie.vote_average,
      isAdult: movie.adult,
    };
  }

  static detailMovieMapper(movie: IMovieByIDResponse): IDetailMovieEntity {
    return {
      id: movie.id,
      title: movie.title,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      popularity: movie.vote_average,
      isAdult: movie.adult,
      description: movie.overview,
      genres: movie.genres,
      year: movie.release_date,
    };
  }
}
