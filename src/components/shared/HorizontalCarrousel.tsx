import React, { useContext, useEffect, useRef } from "react";
import { FlatList } from "react-native-gesture-handler";
import CarrouselCard from "./CarrouselCard";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { IBasicMovieInfoEntity } from "../../entities/IBasicMovieInfo-entity";
import { DrawerHeaderContext } from "../../context/drawerHeaderContext";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootMoviesStackParams } from "../../navigation/MoviesStackNavigator";

interface Props {
  movies: IBasicMovieInfoEntity[];
  loadNextPage?: () => void;
  isPaddingBotton?: boolean;
}

const HorizontalCarrousel = ({
  movies,
  loadNextPage,
  isPaddingBotton,
}: Props) => {
  const {hideHeader} = useContext(DrawerHeaderContext);
  const navigation = useNavigation<NavigationProp<RootMoviesStackParams>>();
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 2000 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    loadNextPage && loadNextPage();
  };

  return (
    <FlatList
      style={{ paddingBottom: isPaddingBotton ? 20 : 0 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={movies}
      keyExtractor={(item, index) => `${item.id}-${item.title}`}
      renderItem={({ item }) => (
        <CarrouselCard
          key={`${item.id}-${item.title}`}
          movie={item}
          onPress={() => {
            hideHeader.current = true;
            navigation.navigate("MovieDetail", { movieId: item.id });
          }}
        />
      )}
      onScroll={onScroll}
    />
  );
};

export default HorizontalCarrousel;
