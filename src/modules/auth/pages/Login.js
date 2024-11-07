// src/components/Login.js
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
    <div >
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
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
      </div>
    </div>
  );
}

export default Login;
