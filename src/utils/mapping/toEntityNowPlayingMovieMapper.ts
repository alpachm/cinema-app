import { INowPlayingMoviesEntity } from "../../entities/INowPlayingMovies-entity";
import { NowPlayingMovie } from "../../interfaces/movies-interfaces";

export const toEntityNowPlayingMovieMapper = (
  movie: NowPlayingMovie
): INowPlayingMoviesEntity => {
  return {
    title: movie.title,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    popularity: movie.popularity,
    isAdult: movie.adult,
  };
};
