import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ accounts, setLoggedInUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const account = accounts.find((acc) => acc.email === email && acc.password === password);

    if (account) {
      setLoggedInUser({
        name: account.name,
        email: account.email,
        role: account.role,
      });

      if (account.role === 'customer') {
        navigate('/');
      } else if (account.role === 'concierge') {
        navigate('/booked-reservations');
      } else if (account.role === 'admin') {
        navigate('/customer-list');
      }
    } else {
      setMessage('Invalid email or password. Please try again.');
    }

    setEmail('');
    setPassword('');
  };

  const navigateToRegister = () => {
    navigate('/register');
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
    