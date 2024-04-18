import React, { useContext } from "react";
import { ScrollView } from "react-native-gesture-handler";
import CarrouselCard from "./CarrouselCard";
import { IBasicMovieInfoEntity } from "../../entities/IBasicMovieInfo-entity";
import { DrawerHeaderContext } from "../../context/drawerHeaderContext";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootMoviesStackParams } from "../../navigation/MoviesStackNavigator";

interface Props {
  data: IBasicMovieInfoEntity[];
}

const PrincipalHorizontalCarrousel = ({ data }: Props) => {
  const {hideHeader} = useContext(DrawerHeaderContext)
  const navigation = useNavigation<NavigationProp<RootMoviesStackParams>>();

  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      {data.map((movie) => (
        <CarrouselCard 
        key={`${movie.id}-${movie.title}`} 
        movie={movie} 
        onPress={() => {
          hideHeader.current = true;
          navigation.navigate("MovieDetail", { movieId: movie.id });
        }}
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
