import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { INowPlayingMoviesEntity } from "../../entities/INowPlayingMovies-entity";
import CardMovie from "./CardMovie";

interface Props {
  data: INowPlayingMoviesEntity[];
}

const CarrouselNowPlaying = ({ data }: Props) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      {data.map((movie) => (
        <CardMovie movie={movie} key={movie.id} />
      ))}
    </ScrollView>
  );
};

export default CarrouselNowPlaying;
