import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CredentialsContext } from '../App';

const Login = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, setCredentials] = useContext(CredentialsContext);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.type === 'text') {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json()) // Extract the JSON data from the response
      .then((res) => {
        setCredentials({
          username: username,
          password: password,
          balance: res.user.balance
        });
        props.setIsAuthenticated(true);
      })
      .then(() => {
        alert('User Logged In Successfully');
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err);
        return alert('Invalid Credentials');
      });
  };

  return (
    <div className="login bg-gray-900">
      <div className="flex items-center justify-center min-h-screen">
        <div className="items-center justify-center bg-gray-700 p-9 rounded-3xl">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-green-300">Login</h1>
            <div className="flex flex-col space-y-4 mt-8">
              <input
                type="text"
                placeholder="Username"
                className="px-4 py-2 border-white outline-gray-800 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                value={username}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-2 border-white outline-gray-800 bg-whitte rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                value={password}
                onChange={handleChange}
              />
              <button
                className="px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                onClick={handleLogin}
              >
                Login
              </button>
              <p className="text-white">
                New User? <a href="/register" className="text-blue-600">Register</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
