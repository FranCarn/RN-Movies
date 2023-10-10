import React, {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInterface';

interface MovieDetails {
  isLoading: boolean;
  cast: any[];
  movieFull: MovieFull;
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>();

  const getMovieDetails = async () => {
    // setState(prev => ({...prev, isLoading: true}));

    const movieFull = movieDB.get<MovieFull>(`/${movieId}`);
    const cast = movieDB.get<MovieFull>('/popular');
    try {
      const res = await Promise.all([movieFull, cast]);
      setState({
        isLoading: false,
        movieFull: res[0].data,
        cast: [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {state};
};
