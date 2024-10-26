// src/routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './components/dashboard/DashboardPage';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import NotFoundPage from './components/common/NotFoundPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;
