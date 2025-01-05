import React, { useState } from 'react';
import './SignInPage.css';

const SignInPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const staticEmail = "pavan062913@gmail.com";
  const staticPassword = "123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === staticEmail && password === staticPassword) {
      setIsLoggedIn(true);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleLogin}>
        <h2>Sign In</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="signin-button">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;
