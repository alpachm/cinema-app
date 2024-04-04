import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { INowPlayingMoviesEntity } from "../../entities/INowPlayingMovies-entity";
import CarrouselCard from "./CarrouselCard";

interface Props {
  data: INowPlayingMoviesEntity[];
}

const PrincipalHorizontalCarrousel = ({ data }: Props) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      {data.map((movie) => (
        <CarrouselCard 
        movie={movie} 
        key={movie.id} 
        cardHeight={320}
        height={258}
        margin={5}
        maxWidth={165}
        width={168}
        />
      ))}
    </ScrollView>
  );
};

export default PrincipalHorizontalCarrousel;
