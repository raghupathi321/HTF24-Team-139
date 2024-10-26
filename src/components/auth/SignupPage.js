// src/components/auth/SignupPage.js
import React from 'react';
import './AuthStyles.css';

const SignupPage = () => {
    return (
        <div className="auth-container">
            <h1>Sign Up</h1>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
        </div>
    );
};

export default SignupPage;
