import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthLayout from '../modules/core/AuthLayout';
import MainLayout from '../modules/core/MainLayout';
import AuthGuard from '../modules/auth/guards/AuthGuard';
import Profile from '../modules/auth/pages/Profile';
import Login from '../modules/auth/pages/Login';
import UserList from '../modules/user/page/UserPage';
import DockerDeploy from '../modules/dockerDeploy/page/DockerDeploy';
import SeedCreator from '../modules/seedCreator/page/SeedCreator';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas de autenticación */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="create-seed" element={<SeedCreator />} />
          <Route path="deploy-docker" element={<DockerDeploy />} />
          <Route path="user-list" element={<UserList />} />
          {/* Aquí puedes agregar rutas para registrar usuario u otras páginas públicas */}
        </Route>

        {/* Rutas protegidas */}
        <Route element={<AuthGuard />}>
          <Route path="/" element={<MainLayout />}>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
