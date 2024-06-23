"use client"
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CandidateDashboard = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-4">Candidate Actions</h1>
            <nav className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
                <Link to="create-account" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Create Account
                </Link>
                <Link to="view-jobs" className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    View Jobs
                </Link>
                <Link to="apply-job" className="btn bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Apply with Resume
                </Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default CandidateDashboard;
