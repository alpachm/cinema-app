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
        cardHeight={460}
        height={388}
        margin={5}
        maxWidth={165}
        width={258}
        />
      ))}
    </ScrollView>
  );
};

export default PrincipalHorizontalCarrousel;
