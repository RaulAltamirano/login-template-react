import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Reemplaza con tu URL base
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Ejemplo de interceptor para manejar errores
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Manejar errores de autorización (e.g., token expirado)
      console.error('Unauthorized');
      // Redirigir al login o refrescar el token
    } else if (error.response && error.response.status === 404) {
      // Manejar errores de no encontrado
      console.error('Not Found');
    } else {
      // Otros errores
      console.error('Error:', error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
