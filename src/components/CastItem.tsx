import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/movieInterface';
interface Props {
  actor: Cast;
}
export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{uri}} style={styles.image} />}

      <View style={styles.actorInfo}>
        <Text style={styles.name}>{actor.name}</Text>
        <Text style={styles.character}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderRadius: 10,
    marginLeft: 20,
    paddingRight: 20,
  },
  image: {width: 50, height: 50, borderRadius: 10},
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  name: {fontWeight: 'bold', fontSize: 18, marginBottom: 4},
  character: {fontSize: 16, opacity: 0.7},
});
