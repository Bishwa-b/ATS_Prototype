// src/components/EmployerDashboard.js
"use client"
import React, { useState } from 'react';
import CreateJob from '../Functions/CreateJob';
import ViewApplicants from '../Functions/ViewApplicants';

function EmployerDashboard({ onJobSubmit }) {
    const [showForm, setShowForm] = useState(false);
    const [showApplicants, setShowApplicants] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
        setShowApplicants(false);
    };

    const toggleApplicants = () => {
        setShowApplicants(!showApplicants);
        setShowForm(false);
    };

   

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-blue-600 text-white py-4 text-center">
                <h1 className="text-xl font-bold">Employer Dashboard</h1>
            </header>
            <div className="flex flex-col items-center p-4">
                <nav className="mb-4">
                    <ul className="flex justify-center space-x-4">
                        <li>
                            <button onClick={toggleForm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Post a Job
                            </button>
                        </li>
                        <li>
                            <button onClick={toggleApplicants} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Applicants
                            </button>
                        </li>
                        <li><a href="logout.html" className="text-blue-600 hover:text-blue-800 font-bold">Logout</a></li>
                    </ul>
                </nav>
                {showForm && <CreateJob onSubmit={onJobSubmit} />}
                {showApplicants && <ViewApplicants />}
            </div>
        </div>
    );
}

export default EmployerDashboard;
