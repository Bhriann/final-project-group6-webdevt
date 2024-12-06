import React, { useState } from 'react';

const Login = ({ accounts }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const account = accounts.find((acc) => acc.email === email);

    if (account) {
      setMessage(`Welcome, ${account.name}!`);
    } else {
      setMessage('Account not found. Please register first.');
    }
    setEmail('');
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
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
