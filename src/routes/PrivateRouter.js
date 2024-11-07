// src/routes/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../modules/auth/hooks/useAuth';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
