"use client"
import React, { useState } from 'react';

const ApplyJob = () => {
    const [resume, setResume] = useState(null);

    const handleResumeUpload = (event) => {
        setResume(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the application submission here
        console.log("Resume Submitted:", resume.name);
    };

    return (
        <form className="container mx-auto px-4" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold my-4">Apply for a Job</h2>
            <input
                type="file"
                onChange={handleResumeUpload}
                className="block w-full text-md p-2 mb-4"
            />
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Submit Application
            </button>
        </form>
    );
};

export default ApplyJob;
