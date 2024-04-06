import { useEffect, useState } from "react";
import * as Services from "./../services/movies";
import { INowPlayingMoviesEntity } from "../entities/INowPlayingMovies-entity";
import { IPopularMoviesEntity } from "../entities/IPopularMovies-entity";

let popularNumberPage = 1;

const useMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<
    INowPlayingMoviesEntity[]
  >([]);
  const [popularMovies, setPopularMovies] = useState<IPopularMoviesEntity[]>(
    []
  );

  const getMovies = async () => {
    const getNowPlayingMovies = await Services.getNowPlayingMoviesService();

    const getPopularMovies = await Services.getPopularMoviesService();

    const [nowPlayingMovies, popularMovies] = await Promise.all([
      getNowPlayingMovies,
      getPopularMovies,
    ]);

    setNowPlayingMovies(nowPlayingMovies);
    setPopularMovies(popularMovies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    nowPlayingMovies,
    popularMovies,

    popularNextPage: async () => {
      popularNumberPage++;
      const popularMovies = await Services.getPopularMoviesService({
        page: popularNumberPage,
      });
      console.log("popularNumberPage", popularNumberPage)
      setPopularMovies((prev) => [...prev, ...popularMovies]);
    },
  };
};

export default useMovies;
