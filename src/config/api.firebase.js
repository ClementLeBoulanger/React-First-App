import * as axios from 'axios';

const apiFirebase = axios.create({
  baseURL: 'https://allomovies-d4189-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default apiFirebase
