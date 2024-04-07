import React, { useEffect, useRef } from "react";
import { FlatList } from "react-native-gesture-handler";
import CarrouselCard from "./CarrouselCard";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { IBasicMovieInfoEntity } from "../../entities/IBasicMovieInfo-entity";

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
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({ item }) => <CarrouselCard movie={item} />}
      onScroll={onScroll}
    />
  );
};

export default HorizontalCarrousel;
