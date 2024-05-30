import axios, { AxiosInstance, AxiosResponse } from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('axiosInstance', config);
    // Modify request config here, e.g., add authentication headers
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  },
);

export default axiosInstance;
