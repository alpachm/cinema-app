import React, { useEffect, useRef } from "react";
import { FlatList } from "react-native-gesture-handler";
import { IPopularMoviesEntity } from "../../entities/IPopularMovies-entity";
import CarrouselCard from "./CarrouselCard";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

interface Props {
    movies: IPopularMoviesEntity[]
    loadNextPage?: () => void;
}

const HorizontalCarrousel = ({movies, loadNextPage}: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies])

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

    if(isLoading.current) return;

    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
  
    const isEndReached = (contentOffset.x + layoutMeasurement.width + 2000) >= contentSize.width;
  
    if(!isEndReached) return;

    isLoading.current = true;
  
    loadNextPage && loadNextPage();
  }

  return <FlatList 
  horizontal
  data={movies}
  keyExtractor={((item, index) => `${item.id}-${index}`)}
  renderItem={({item}) => (
    <CarrouselCard movie={item} />
  )}
  onScroll={onScroll}
  />;
};

export default HorizontalCarrousel;
