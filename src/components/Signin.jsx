// Signin.jsx (Redesigned with a cleaner, more modern look)
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css';
import { supabase } from '../supabase'; // Import Supabase

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // New state for error message
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignin = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message before sign-in attempt
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Error signing in:', error.message);
      setErrorMessage('Invalid credentials'); // Set error message on failure
    } else {
      console.log('Signin successful:', email);
      navigate('/'); // Redirect to the root route upon successful sign-in
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2 className="signin-title">Welcome Back</h2>
        {errorMessage && <p className="error-message text-red-600">{errorMessage}</p>} {/* Display error message in red */}
        <form onSubmit={handleSignin} className="signin-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signin-input"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signin-input"
            />
          </div>
          <button type="submit" className="signin-button bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-800" >
            Sign In
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;