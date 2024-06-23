"use client"
import React, { useState, useEffect } from 'react';
import ViewJobs from '../Functions/ViewJobs';

function RecruiterDashboard() {
    const [applications, setApplications] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentApplication, setCurrentApplication] = useState(null);

    useEffect(() => {
        if (applications.length > 0) {
            setCurrentApplication(applications[currentIndex]);
        }
    }, [currentIndex, applications]);

    const handleApplicationSubmit = (application) => {
        setApplications(prevApplications => [...prevApplications, application]);
    };

    const advanceApplication = () => {
        if (currentIndex < applications.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            alert("No more applications to review.");
        }
    };

    return (
        <div>
            <h1>Recruiter Dashboard</h1>
            {currentApplication ? (
                <>
                    <h2>Reviewing Application: {currentApplication.name}</h2>
                    <div>
                        <p><strong>College:</strong> {currentApplication.college}</p>
                        <p><strong>Skills:</strong> {currentApplication.skills}</p>
                        <p><strong>CGPA:</strong> {currentApplication.cgpa}</p>
                    </div>
                    <button onClick={advanceApplication}>Next Application</button>
                </>
            ) : (
                <p>No more applications to review or load next application.</p>
            )}
            <ViewJobs jobPosts={[]} onApplicationSubmit={handleApplicationSubmit} />
        </div>
    );
}

export default RecruiterDashboard;
