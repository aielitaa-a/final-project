import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
      localStorage.setItem('isLogged', 'true');
      navigate('/');
      window.location.reload();
    } else {
      setError('Invalid email or password! Please try again.');
    }
  };

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleLogin}>
        <h1 className="reg-title">Login</h1>
        {error && <p style={{color: 'red', marginBottom: '10px'}}>{error}</p>}
        <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="reg-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;