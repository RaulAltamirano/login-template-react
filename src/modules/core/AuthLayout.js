// src/layouts/AuthLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-700">
      // <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg space-y-8">
      <div>

        <Outlet />

        <div className="text-center text-gray-500 text-sm mt-4">
          <p>¿No tienes cuenta? <a href="/register" className="text-blue-600 hover:underline">Regístrate</a></p>
        </div>
       </div>
    // </div>
  );
}

export default AuthLayout;
