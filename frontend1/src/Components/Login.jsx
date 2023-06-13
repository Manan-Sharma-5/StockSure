import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
        axios.post('http://localhost:8000/login', {
            username: username,
            password: password
        }).then((res) => {
            console.log(res);
            alert('User Logged In Successfully')
            navigate('/dashboard');
        }
        ).catch((err) => {
            console.log(err);
            return alert('Invalid Credentials');
        }
        )
    }


    return (
        <div className="login bg-blue-700">
        <div className="flex items-center justify-center min-h-screen">
        <div className="items-center justify-center bg-white p-9 rounded-3xl">
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-700">Login</h1>
        <div className="flex flex-col space-y-4 mt-8">
        <input type="text" placeholder="Username" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" value={username} onChange={handleChange} />
        <input type="password" placeholder="Password" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" value={password} onChange={handleChange}/>
        <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" onClick={handleLogin}>Login</button>
        <p>New User? <a href="/register" className="text-blue-600">Register</a></p>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Login;