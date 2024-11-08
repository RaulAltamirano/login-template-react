// src/modules/auth/hooks/useAuth.js
import { useState, useEffect } from 'react';
import axiosInstance from '../instance/axiosInstance';

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);  // Almacena los datos del usuario
  const [loading, setLoading] = useState(false);  // Maneja el estado de carga
  const [error, setError] = useState(null);  // Maneja los errores

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log({token})
    setIsAuthenticated(!!token);
  }, []);

    // Iniciar sesión
    const login = async (email, password) => {
      setLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.post('/auth/login', { email, password });
        const { token, userData } = response.data;

        // Guardar el token en el localStorage o cookie
        localStorage.setItem('token', token);

        // Guardar los datos del usuario
        setUser(userData);
        setLoading(false);
        return { success: true };
      } catch (err) {
        setError('Error al iniciar sesión');
        setLoading(false);
        return { success: false, error: err.response?.data?.message || 'Error desconocido' };
      }
    };

    // Registrar usuario
    const register = async (email, password, fullName) => {
      setLoading(true);
      setError(null);
    
      try {
        const response = await axiosInstance.post('/auth/signup', { email, password, fullName });
        const { token, userData } = response.data;
        localStorage.setItem('token', token);
        setUser(userData);
        setLoading(false);
        console.log(response.data);
        const error = response.data.error;
        if (error) {
          setError(error); 
          return { success: false, error: error || 'Error desconocido' };
        }
        return { success: true };
      } catch (err) {
        setLoading(false);
        return { success: false, error: err.response?.data?.message || 'Error desconocido' };
      }
    };

    // Cerrar sesión
    const logout = () => {
      localStorage.removeItem('token'); // Eliminar el token
      setUser(null); // Limpiar el estado del usuario
    };

    // Verificar si el usuario está autenticado (verifica si hay un token en localStorage)
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      if (token) {
        // Si existe el token, podrías hacer una llamada para validar el token con el backend
        axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
        return true;
      }
      return false;
    };

  return { 
    isAuthenticated,
    user,
    loading,
    error,
    login,
    register,
    logout,
    checkAuth,
  };
}

export default useAuth;
