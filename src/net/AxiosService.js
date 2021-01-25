import axios from 'axios';

const AxiosService = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});

export default AxiosService;
