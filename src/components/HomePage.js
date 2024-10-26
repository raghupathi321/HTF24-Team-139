// src/components/HomePage.js
import React from 'react';
import './HomePageStyles.css'; // Import styles for the homepage
import video from '../assets/video.mp4'; // Correct path to the video file

function HomePage() {
  return (
    <div className="homepage">
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to the Finance Dashboard!</h1>
        <p>Your personal finance management tool.</p>
        {/* Additional content can go here */}
        <div className="features">
          <h2>Features:</h2>
          <ul>
            <li>Track your expenses</li>
            <li>Set budgets</li>
            <li>Analyze spending habits</li>
            <li>View detailed reports</li>
          </ul>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
