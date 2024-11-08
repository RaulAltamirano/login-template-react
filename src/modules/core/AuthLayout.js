import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg space-y-8">
      {/* Contenido principal */}
      <Outlet/>
    </div>
  );
}

export default AuthLayout;
