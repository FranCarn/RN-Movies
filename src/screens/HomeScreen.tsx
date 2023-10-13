import React from 'react';
import Carousel from 'react-native-snap-carousel';

import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, upcoming, popular, topRated, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  if (isLoading)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="#f452D1" size={100} />
      </View>
    );
  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 10}}>
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              itemWidth={300}
              renderItem={({item}) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              inactiveSlideOpacity={0.9}
            />
          </View>

          <HorizontalSlider movies={popular} title="Popular" />
          <HorizontalSlider movies={topRated} title="Top Rated" />
          <HorizontalSlider movies={upcoming} title="Upcoming" />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
