import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import CarrouselCard from "./CarrouselCard";
import { IBasicMovieInfoEntity } from "../../entities/IBasicMovieInfo-entity";

interface Props {
  data: IBasicMovieInfoEntity[];
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
