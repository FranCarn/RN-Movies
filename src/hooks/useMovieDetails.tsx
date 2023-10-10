import React, {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {Cast, MovieCast, MovieFull} from '../interfaces/movieInterface';

interface MovieDetails {
  cast: Cast[];
  isLoading: boolean;
  movieFull?: MovieFull;
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    cast: [],
    isLoading: false,
    movieFull: undefined,
  });

  const getMovieDetails = async () => {
    setState(prev => ({...prev, isLoading: true}));

    const movieFull = movieDB.get<MovieFull>(`/${movieId}`);
    const cast = movieDB.get<MovieCast>(`/${movieId}/credits`);
    try {
      const res = await Promise.all([movieFull, cast]);
      setState({
        cast: res[1].data.cast,
        isLoading: false,
        movieFull: res[0].data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};
