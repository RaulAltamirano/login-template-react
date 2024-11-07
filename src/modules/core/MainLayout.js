// src/layouts/MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
// import Navbar from '../components/Navbar';

function MainLayout() {
  return (
    <div className="main-layout">
      {/* <Navbar /> */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
