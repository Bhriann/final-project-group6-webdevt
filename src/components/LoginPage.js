import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ accounts, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // We'll use this for redirection after login

  const handleLogin = (e) => {
    e.preventDefault();

    // Find the account with the matching email and password
    const account = accounts.find((acc) => acc.email === email && acc.password === password);

    if (account) {
      // Successful login, set loggedInUser
      onLogin(account.username, password); // Call the onLogin function passed from App.js
      setMessage(`Welcome, ${account.name}!`);
      navigate('/book'); // Redirect to booking page after login
    } else {
      setMessage('Invalid email or password. Please try again.');
    }

    // Clear form fields after submitting
    setEmail('');
    setPassword('');
  };

  const navigateToRegister = () => {
    navigate('/register'); // Navigate to the registration page
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}

      <p>
        Don't have an account?{' '}
        <button onClick={navigateToRegister}>Register here</button>
      </p>
    </div>
  );
};

export default Login;
