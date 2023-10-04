import React from 'react';
import Carousel from 'react-native-snap-carousel';

import {View, ActivityIndicator, Dimensions} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {moviesInTheatre, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  if (isLoading)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="#f452D1" size={100} />
      </View>
    );
  return (
    <View style={{marginTop: top + 10}}>
      <View style={{height: 440}}>
        <Carousel
          data={moviesInTheatre}
          renderItem={({item}) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  );
};
