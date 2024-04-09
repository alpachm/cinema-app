import { useContext, useEffect, useState } from "react";
import { IDetailMovieEntity } from "../../entities/IDetailMovie-entity";
import * as Services from "./../../services/movies";
import { LoadingPageContext } from "../../context/loadingPageContext";

interface Props {
  movieId: number;
}

const useMovie = ({ movieId }: Props) => {
  const {setIsLoading} = useContext(LoadingPageContext);
  const [movieById, setMovieById] = useState<IDetailMovieEntity>();

  const getMovie = async () => {
    setIsLoading(true);
    await Services.getMovieIdService(movieId)
      .then((result) => setMovieById(result))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return {
    movieById,
  };
};

export default useMovie;
