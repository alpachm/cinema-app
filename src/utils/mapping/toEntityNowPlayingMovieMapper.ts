import { INowPlayingMoviesEntity } from "../../entities/INowPlayingMovies-entity";
import { NowPlayingMovie } from "../../interfaces/movies-interfaces";

export const toEntityNowPlayingMovieMapper = (
  movie: NowPlayingMovie
): INowPlayingMoviesEntity => {
  return {
    id: movie.id,
    title: movie.title,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    popularity: movie.vote_average,
    isAdult: movie.adult,
  };
};
