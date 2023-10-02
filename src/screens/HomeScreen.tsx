import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying} from '../interfaces/movieInterface';

export const HomeScreen = () => {
  useEffect(() => {
    movieDB.get<MovieDBNowPlaying>('/now_playing').then(res => {
      console.log(res.data.results);
    });
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
