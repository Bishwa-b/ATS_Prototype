"use client"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === 'admin') {
            onLogin(true);  // Set the logged in state to true
            navigate('/');  // Navigate to the main dashboard or the default page
        } else {
            alert('Invalid credentials!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block">Username:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className="border px-2 py-1 rounded"
                    required />
            </div>
            <div>
                <label className="block">Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="border px-2 py-1 rounded"
                    required />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </form>
    );
}

export default LoginForm;
