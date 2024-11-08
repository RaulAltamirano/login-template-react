// src/components/Login.js
import React, { useState } from 'react';
import AppRoutes from '../../../routes/AppRouter';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../instance/axiosInstance';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Función para redirigir a una ruta
  const handleNavigate = (path) => {
    navigate(path);
  };

  // Función para manejar solicitud POST
  const handlePostRequest = async (endpoint) => {
    try {
      const response = await axiosInstance.post(endpoint);
      console.log('Respuesta:', response.data);
      alert(`Operación exitosa: ${endpoint}`);
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert(`Error en la solicitud: ${endpoint}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de validación simple
    if (!email.includes('@')) {
      setError('Por favor, ingresa un email válido.');
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setError(''); // Limpiar error
    alert("¡Inicio de sesión exitoso!");
  };

  return (
    <div className="items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white">
        <h2 className="text-3xl font-semibold text-center text-primary">Iniciar Sesión</h2>
        {error && <div className="p-4 text-red-700 bg-red-200 rounded">{error}</div>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-primary rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-primary"
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="text-center text-gray-500 text-sm mt-4">
          <p>
            ¿No tienes cuenta?{' '}
            <a href="/register" className="text-blue-600 hover:underline">
              Regístrate
            </a>
          </p>
        </div>

        {/* Sección de botones adicionales */}
        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 text-center">Opciones Adicionales</h3>
          <div className="grid grid-cols-1 gap-4">
            <button
              className="w-full p-3 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition duration-200"
              onClick={() => handleNavigate('/user-list')}
            >
              Ver Usuarios
            </button>
            <button
              className="w-full p-3 text-white bg-green-500 rounded-md hover:bg-green-600 transition duration-200"
              onClick={() => handlePostRequest('/create-seed')}
            >
              Crear Semilla
            </button>
            <button
              className="w-full p-3 text-white bg-teal-500 rounded-md hover:bg-teal-600 transition duration-200"
              onClick={() => handlePostRequest('/deploy-docker')}
            >
              Desplegar Docker
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
