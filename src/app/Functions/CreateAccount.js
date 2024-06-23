"use client"
import React, { useState } from 'react';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle account creation logic here
        console.log("Account Created:", { email, password });
    };

    return (
        <form className="container mx-auto px-4" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold my-4">Create Account</h2>
            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="block border border-grey-light w-full p-3 rounded mb-4"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="block border border-grey-light w-full p-3 rounded mb-4"
            />
            <button type="submit" className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-darker focus:outline-none my-1">
                Create Account
            </button>
        </form>
    );
};

export default CreateAccount;
