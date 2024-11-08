import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Reemplaza con tu URL base
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Ejemplo de interceptor para manejar errores
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejo de errores globales
    return Promise.reject(error);
  }
);

export default axiosInstance;
