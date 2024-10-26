// src/components/auth/LoginPage.js
import React from 'react';
import './AuthStyles.css';

const LoginPage = () => {
    return (
        <div className="auth-container">
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </div>
    );
};

export default LoginPage;
