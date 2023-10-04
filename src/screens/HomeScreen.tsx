import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
      {moviesInTheatre.map(movie => (
        <MoviePoster movie={movie} />
      ))}
    </View>
  );
};
