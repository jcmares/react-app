import axios from 'axios';

export const EndPoints  = {
  baseURL: '',
  login: EndPoints.baseURL + '/login'
}

export const AxiosService = axios.create({
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});

