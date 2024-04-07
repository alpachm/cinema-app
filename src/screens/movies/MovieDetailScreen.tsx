import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { RootMoviesStackParams } from "../../navigation/MoviesStackNavigator";
import { ScrollView } from "react-native-gesture-handler";
import useMovie from "../../hooks/movies/useMovie";
import { globalStyles } from "../../styles/globalStyles";
import MovieStars from "../../components/shared/Stars";
import Stars from "../../components/shared/Stars";
import PrimaryButton from "../../components/shared/PrimaryButton";

const MovieDetailScreen = () => {
  const { movieId } =
    useRoute<RouteProp<RootMoviesStackParams, "MovieDetail">>().params;
  const { movieById } = useMovie({ movieId });

  return (
    <ScrollView>
      <Image source={{ uri: movieById?.poster }} />
      <View style={{ ...globalStyles.container }}>
        <View>
          <Text>{movieById?.title}</Text>
          <Text>{movieById?.year}</Text>
          <Stars popularity={movieById?.popularity!} />
        </View>
        {/**generos */}
        <Text>{movieById?.description}</Text>
      </View>

      <View>
        <PrimaryButton label="Buy tickets" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

export default MovieDetailScreen;
