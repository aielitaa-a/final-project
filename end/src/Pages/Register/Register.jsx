import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

function Register() {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    setError('');

    if (!isLoginMode) {
      const newUser = { name, email, password };
      localStorage.setItem('user', JSON.stringify(newUser));
      setShowSuccess(true);
    } else {
      const savedUser = JSON.parse(localStorage.getItem('user'));

      if (savedUser && savedUser.email === email && savedUser.password === password) {
        navigate('/');
        window.location.reload();
      } else {
        setError('Invalid email or password. Please try again!');
      }
    }
  };

  const closeAndGoHome = () => {
    setShowSuccess(false);
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="register-page">
      <div className="container">
        <form className="register-form" onSubmit={handleAuth}>
          <h3 className="reg-subtitle">Join us</h3>
          <h1 className="reg-title">{isLoginMode ? 'Login' : 'Create Account'}</h1>

          {error && <p className="error-msg">{error}</p>}

          {!isLoginMode && (
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="reg-btn">
            {isLoginMode ? 'Log In' : 'Register Now'}
          </button>

          <p className="toggle-auth" onClick={() => {
            setIsLoginMode(!isLoginMode);
            setError('');
          }}>
            {isLoginMode ? "Don't have an account? Register" : "Already have an account? Login"}
          </p>
        </form>
      </div>

      {showSuccess && (
        <div className="reg-modal-overlay">
          <div className="reg-modal-content">
            <h2>Success!</h2>
            <p>Welcome to Organic, {name}! Your account has been created.</p>
            <button onClick={closeAndGoHome} className="reg-btn">Go to Home</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;