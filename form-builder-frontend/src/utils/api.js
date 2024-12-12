import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/forms',
});

export default api;