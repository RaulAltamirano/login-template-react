import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthLayout from '../modules/core/AuthLayout';
import MainLayout from '../modules/core/MainLayout';
import Login from '../modules/auth/pages/Login';
import UserList from '../modules/user/page/UserPage';
import Home from '../modules/Dashboard/pages/Home';
import { AuthProvider } from '../modules/auth/context/AuthContext';
import Register from '../modules/auth/pages/Register';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas de autenticación */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="user-list" element={<UserList />} />
          {/* Aquí puedes agregar rutas para registrar usuario u otras páginas públicas */}
        </Route>

        {/* Rutas protegidas */}
        <Route element={<AuthProvider />}>
          <Route path="/" element={<MainLayout />}>
            <Route path="home" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
