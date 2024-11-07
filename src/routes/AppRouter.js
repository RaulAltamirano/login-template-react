// src/routes/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Register from '../modules/Auth/pages/Register';
import Home from '../modules/Dashboard/pages/Home';
import AuthLayout from '../modules/core/AuthLayout';
import MainLayout from '../modules/core/MainLayout';
import Profile from '../modules/auth/pages/Profile';
import Login from '../modules/auth/pages/Login';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Rutas de autenticación */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Route>

        {/* Rutas protegidas del dashboard */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
