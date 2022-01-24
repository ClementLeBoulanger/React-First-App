import * as axios from 'axios';

const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
  req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmM2OGZlMmQ3MzE4NGNmZjcyOGMzODM1OWQxOGNlNyIsInN1YiI6IjYxZWU3ZjZiZDQwZDRjMDBhMmRiMmQ3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XGl0dWpPd5ZZ5nGqD0gvcpq8Eoj6F5cqCjpXAq_4YMY'
  return req;
})

export default apiMovie;
