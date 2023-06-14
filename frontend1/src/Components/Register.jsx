import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CredentialsContext } from '../App';
import { useContext } from 'react';
const Register = (props) => {

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
    }

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/register', {
            username: username,
            password: password,
            balance: 100000
        }).then((res) => {
            console.log(res);
            alert('User Registered Successfully')
                navigate('/login');
        }
        ).catch((err) => {
            console.log(err);
        }
        )
    }


    return (
        <div className="login bg-gray-900">
        <div className="flex items-center justify-center min-h-screen">
          <div className="items-center justify-center bg-gray-700 p-9 rounded-3xl">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-green-300">Register</h1>
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
                Register
              </button>
        <p>Already a User? <a href="/login" className="text-blue-600">Login</a></p>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Register;