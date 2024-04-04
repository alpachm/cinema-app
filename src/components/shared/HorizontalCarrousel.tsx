import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { IPopularMoviesEntity } from "../../entities/IPopularMovies-entity";
import CarrouselCard from "./CarrouselCard";

interface Props {
    movies: IPopularMoviesEntity[]
}

const HorizontalCarrousel = ({movies}: Props) => {
  return <FlatList 
  horizontal
  data={movies}
  keyExtractor={((item) => item.id.toString())}
  renderItem={({item}) => (
    <CarrouselCard movie={item} />
  )}
  />;
};

export default HorizontalCarrousel;
