import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: process.env.api_key,
    languaje: 'en-US',
  },
});

export default movieDB;
