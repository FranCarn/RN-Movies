import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast, MovieFull} from '../interfaces/movieInterface';
import {CastItem} from './CastItem';

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

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Synopsis:
        </Text>
        <Text style={{fontSize: 16, lineHeight: 2}}>{movie.overview}</Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Budget:
        </Text>
        <Text style={{fontSize: 18, lineHeight: 2}}>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(movie.budget)}
        </Text>
      </View>
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Cast:
        </Text>

        {cast.map(item => (
          <CastItem actor={item} />
        ))}
      </View>
    </>
  );
};
