// src/modules/Dashboard/pages/Home.js
import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Contenedor de bienvenida */}
      <div className="mb-8 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-800">¡Bienvenido al Dashboard!</h1>
        <p className="text-gray-600">Aquí puedes ver las estadísticas y acceder a las funcionalidades de la aplicación.</p>
      </div>

      {/* Contenedor de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tarjeta de estadísticas */}
        <div className="p-6 bg-white shadow-md rounded-lg flex items-center space-x-4">
          <div className="bg-blue-100 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Usuarios Activos</h2>
            <p className="text-gray-600">1,200</p>
          </div>
        </div>

        {/* Otra tarjeta de estadísticas */}
        <div className="p-6 bg-white shadow-md rounded-lg flex items-center space-x-4">
          <div className="bg-green-100 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Tareas Completadas</h2>
            <p className="text-gray-600">450</p>
          </div>
        </div>

        {/* Otra tarjeta de estadísticas */}
        <div className="p-6 bg-white shadow-md rounded-lg flex items-center space-x-4">
          <div className="bg-yellow-100 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1m10 2h2m4 0h2M5 10V9a2 2 0 012-2h10a2 2 0 012 2v1m-4 4h1m-6 4h2m4 0h2M9 16h2m-4 0h.01M15 16h2m-4 4h.01M11 12H9" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Pendientes</h2>
            <p className="text-gray-600">120</p>
          </div>
        </div>
      </div>

      {/* Contenedor de enlaces rápidos */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Enlaces Rápidos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/profile" className="block p-4 bg-white shadow-md rounded-lg hover:bg-gray-50">
            <h4 className="font-semibold text-blue-600">Ver Perfil</h4>
            <p className="text-gray-600">Configura tus datos y ajustes de usuario.</p>
          </a>
          <a href="/settings" className="block p-4 bg-white shadow-md rounded-lg hover:bg-gray-50">
            <h4 className="font-semibold text-blue-600">Configuraciones</h4>
            <p className="text-gray-600">Ajusta las preferencias de tu cuenta.</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
