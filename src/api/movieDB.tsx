import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '6c42fc77f328f003bab24d17d4b72b56',
    language: 'en-US',
  },
});

export default movieDB;
