import { useEffect, useState } from "react";
import * as Services from "./../services/movies";
import { INowPlayingMoviesEntity } from "../entities/INowPlayingMovies-entity";

const useMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<
    INowPlayingMoviesEntity[]
  >([]);

  const getMovies = async () => {
    await Services.getNowPlayingMoviesService()
      .then((result) => setNowPlayingMovies(result))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { nowPlayingMovies };
};

export default useMovies;
