import { useEffect, useState } from "react";
import * as Services from "../../services/movies";
import { IBasicMovieInfoEntity } from "../../entities/IBasicMovieInfo-entity";

let popularNumberPage = 1;
let topRatedNumberPage = 1;
let upcomingdNumberPage = 1;

const useMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<
    IBasicMovieInfoEntity[]
  >([]);
  const [popularMovies, setPopularMovies] = useState<IBasicMovieInfoEntity[]>(
    []
  );
  const [topRatedMovies, setTopRatedMovies] = useState<IBasicMovieInfoEntity[]>(
    []
  );
  const [upcomingMovies, setUpcomingMovies] = useState<IBasicMovieInfoEntity[]>(
    []
  );

  const getMovies = async () => {
    const getNowPlayingMovies = await Services.getNowPlayingMoviesService();
    const getPopularMovies = await Services.getPopularMoviesService();
    const getTopRatedMovies = await Services.getTopRatedMoviesServices();
    const getUpcomingMovies = await Services.getUpcomingMoviesService();

    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        getNowPlayingMovies,
        getPopularMovies,
        getTopRatedMovies,
        getUpcomingMovies,
      ]);

    setNowPlayingMovies(nowPlayingMovies);
    setPopularMovies(popularMovies);
    setTopRatedMovies(topRatedMovies);
    setUpcomingMovies(upcomingMovies);
  };

  class LoadNextPage {
    static async popularMovies() {
      popularNumberPage++;
      const popularMovies = await Services.getPopularMoviesService({
        page: popularNumberPage,
      });
      setPopularMovies((prev) => [...prev, ...popularMovies]);
    }

    static async topRatedMovies() {
      topRatedNumberPage++;
      const topRatedMovies = await Services.getTopRatedMoviesServices({
        page: topRatedNumberPage,
      });
      setTopRatedMovies((prev) => [...prev, ...topRatedMovies]);
    }

    static async upcomingMovies() {
      upcomingdNumberPage++;
      const upcomingMovies = await Services.getUpcomingMoviesService({
        page: upcomingdNumberPage,
      });
      setUpcomingMovies((prev) => [...prev, ...upcomingMovies]);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return {
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    popularNextPage: LoadNextPage.popularMovies,
    topRatedNextPage: LoadNextPage.topRatedMovies,
    upcomingNextPage: LoadNextPage.upcomingMovies,
  };
};

export default useMovies;
