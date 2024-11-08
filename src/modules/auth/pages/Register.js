import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Register() {
    const { register, error, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setFullName] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const { success } = await register(email, password,userName);
    console.log(success, error);
    if (success) {
      console.log(success);
      navigate('/login'); 
    } else {
      alert(error); 
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-primary">Regístrate</h2>
        {error && <div className="p-4 text-red-700 bg-red-200 rounded">{error}</div>}

        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Nombre Completo"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="ejemplo@correo.com"
              required
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
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              La contraseña debe tener al menos 6 caracteres, incluyendo mayúsculas, minúsculas y números.
            </p>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-primary rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-primary"
            disabled={loading} // Deshabilita el botón mientras carga
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                <span>Cargando...</span>
              </div>
            ) : (
              'Registrarse'
            )}
          </button>
        </form>

        <div className="text-center text-gray-500 text-sm mt-4">
          <p>
            ¿Ya tienes una cuenta?{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
