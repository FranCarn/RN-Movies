import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast, MovieFull} from '../interfaces/movieInterface';

interface Props {
  movie: MovieFull;
  cast: Cast[];
}
export const MovieDetails = ({movie, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text>{movie.vote_average}</Text>

          <Text style={{marginLeft: 5}}>
            - {movie.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>

        <Text>{movie.budget}</Text>
        <Text>{movie.budget}</Text>
      </View>
    </>
  );
};
