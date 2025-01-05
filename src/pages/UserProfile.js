// UserProfile.js
import React from 'react';
import './userProfile.css';

const UserProfile = () => {
  const loginData = Array.from({ length: 365 }, (_, i) => Math.random() > 0.7); // Simulate login data

  return (
    <div className="user-profile-container">
      <div className="user-left-section">
        <div className="user-image">
          <img src="https://via.placeholder.com/150" alt="User" />
        </div>
        <div className="user-details">
          <h2>John Doe</h2>
          <p>Software Developer</p>
          <p>Email: john.doe@example.com</p>
        </div>
      </div>

      <div className="user-right-section">
        <div className="career-growth-graph">
          <h3>Career Growth</h3>
          <div className="graph">[Graph Placeholder]</div>
        </div>

        <div className="yearly-login-box">
          <h3>Yearly Login Activity</h3>
          <div className="login-grid">
            {loginData.map((loggedIn, index) => (
              <div
                key={index}
                className={`login-day ${loggedIn ? 'logged-in' : 'not-logged-in'}`}
                title={`Day ${index + 1}: ${loggedIn ? 'Logged In' : 'Not Logged In'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;