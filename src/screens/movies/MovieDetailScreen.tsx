import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { RootMoviesStackParams } from "../../navigation/MoviesStackNavigator";
import { ScrollView } from "react-native-gesture-handler";
import useMovie from "../../hooks/movies/useMovie";
import { globalColors, globalStyles } from "../../styles/globalStyles";
import Stars from "../../components/shared/Stars";
import PrimaryButton from "../../components/shared/PrimaryButton";
import { MovieDetailScreenStyles } from "../../styles/movieDetailScreenStyles";
import { StatusBar } from "expo-status-bar";
import { DrawerHeaderContext } from "../../context/drawerHeaderContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LoadingPageContext } from "../../context/loadingPageContext";
import LoadingPage from "../../components/shared/LoadingPage";

const MovieDetailScreen = () => {
  const { isLoading } = useContext(LoadingPageContext);
  const { hideHeader } = useContext(DrawerHeaderContext);
  const navigation = useNavigation<NavigationProp<RootMoviesStackParams>>();
  const { movieId } =
    useRoute<RouteProp<RootMoviesStackParams, "MovieDetail">>().params;
  const { movieById } = useMovie({ movieId });

  navigation.addListener("beforeRemove", () => {
    hideHeader.current = false;
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <StatusBar backgroundColor={"transparent"} />
      <ScrollView style={{ position: "relative" }}>
        <Image
          style={MovieDetailScreenStyles.image}
          source={{ uri: movieById?.poster }}
        />
        <Pressable
          style={MovieDetailScreenStyles.backButton}
          onPress={() => {
            hideHeader.current = false;
            navigation.goBack();
          }}
        >
          <Ionicons
            name="chevron-back-outline"
            size={42}
            color={globalColors.white}
          />
        </Pressable>

        <View
          style={{
            ...globalStyles.container,
            ...MovieDetailScreenStyles.container,
          }}
        >
          <View>
            <Text
              style={{
                ...globalStyles.title,
                ...MovieDetailScreenStyles.title,
              }}
            >
              {movieById?.title}
            </Text>
            <Text style={MovieDetailScreenStyles.subtitle}>
              {movieById?.year.split("-")[0]}
            </Text>
            <Stars popularity={movieById?.popularity!} />
          </View>

          <View style={MovieDetailScreenStyles.genresContainer}>
            {movieById?.genres.map((genre) => (
              <Pressable style={MovieDetailScreenStyles.genreButton}>
                <Text style={MovieDetailScreenStyles.genreText}>
                  {genre.name}
                </Text>
              </Pressable>
            ))}
          </View>

          <Text style={globalStyles.paragraph}>{movieById?.description}</Text>

          <View style={MovieDetailScreenStyles.buttonContainer}>
            <PrimaryButton
              label="Buy tickets"
              onPress={() =>
                navigation.navigate("Checkout", {
                  movieId: movieById?.id!,
                  title: movieById?.title!,
                })
              }
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MovieDetailScreen;
