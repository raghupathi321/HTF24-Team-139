// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Updated path
import DashboardPage from './components/dashboard/DashboardPage'; // Updated path
import LoginPage from './components/auth/LoginPage'; // Ensure this file exists
import SignupPage from './components/auth/SignupPage'; // Ensure this file exists
import Header from './components/layout/Header'; // Updated path
import Footer from './components/layout/Footer'; // Updated path
// Removed NotFoundPage import as it's no longer used
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<DashboardPage />} /> {/* Redirect to DashboardPage */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
