import { useEffect, useState } from "react";
import { IDetailMovieEntity } from "../../entities/IDetailMovie-entity";
import * as Services from "./../../services/movies";

interface Props {
  movieId: number;
}

const useMovie = ({ movieId }: Props) => {
  const [movieById, setMovieById] = useState<IDetailMovieEntity>();

  const getMovie = async () => {
    await Services.getMovieIdService(movieId)
      .then((result) => setMovieById(result))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return {
    movieById,
  };
};

export default useMovie;
