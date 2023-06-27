import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'cfef059fa465cdec7506fa17bc4798e5',
    language: 'es-Es',
  },
});

export default movieDB;
