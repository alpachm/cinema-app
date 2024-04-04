import { INowPlayingMoviesEntity } from "../../entities/INowPlayingMovies-entity";
import { IPopularMoviesEntity } from "../../entities/IPopularMovies-entity";
import {
  NowPlayingMovie,
  popularMovie,
} from "../../interfaces/movies-interfaces";

export class toEntityMappers {
  
  static NowPlayingMovieMapper(
    movie: NowPlayingMovie
  ): INowPlayingMoviesEntity {
    return {
      id: movie.id,
      title: movie.title,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      popularity: movie.vote_average,
      isAdult: movie.adult,
    };
  }

  static PopularMoviesMapper(movie: popularMovie): IPopularMoviesEntity {
    return {
      id: movie.id,
      title: movie.title,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      popularity: movie.vote_average,
      isAdult: movie.adult,
    };
  }
}
