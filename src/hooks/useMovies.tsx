import {useEffect, useState} from 'react';
import {Movie, MoviesResponse} from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovies = async () => {
    const nowPlaying = movieDB.get<MoviesResponse>('/now_playing');
    const popular = movieDB.get<MoviesResponse>('/popular');
    const topRated = movieDB.get<MoviesResponse>('/top_rated');
    const upcoming = movieDB.get<MoviesResponse>('/upcoming');
    try {
      const res = await Promise.all([nowPlaying, popular, topRated, upcoming]);

      setMoviesState({
        nowPlaying: res[0].data.results,
        popular: res[1].data.results,
        topRated: res[2].data.results,
        upcoming: res[3].data.results,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
