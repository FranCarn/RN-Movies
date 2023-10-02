import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useMovies} from '../hooks/useMovies';

export const HomeScreen = () => {
  const {moviesInTheatre, isLoading} = useMovies();

  if (isLoading)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="#f452D1" size={100} />
      </View>
    );
  return (
    <View>
      <Text>{moviesInTheatre[0].title}</Text>
    </View>
  );
};
