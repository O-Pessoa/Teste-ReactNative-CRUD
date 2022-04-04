import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://a07a-170-150-145-183.ngrok.io',
});

export default axiosInstance;
