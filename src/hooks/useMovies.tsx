import {useEffect, useState} from 'react';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

interface Props {}

export const useMovies = () => {
  const [moviesInTheatre, setMoviesInTheatre] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getMovies = async () => {
    try {
      const res = await movieDB.get<MovieDBNowPlaying>('/now_playing');
      setMoviesInTheatre(res.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesInTheatre,
    isLoading,
  };
};
