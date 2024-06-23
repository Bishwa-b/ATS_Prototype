
"use client"
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import EmployerDashboard from '../Employer/page';
import CoordinatorDashboard from '../Functions/CoordinatorDashborad';
import CandidateDashboard from '../Functions/CandidateDashboard';
import CreateAccount from '../Functions/CreateAccount';
import ViewJobs from '../Functions/ViewJobs';
import ApplyJob from '../Functions/ApplyJob';
import RecruiterDashboard from '../Functions/RecruiterDashboard';
import LoginForm from '../components/loginForm';

function App() {
    const [jobPosts, setJobPosts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleJobSubmit = (jobData) => {
        setJobPosts([...jobPosts, jobData]);
    };

    const postJob = (jobId) => {
        const updatedJobs = jobPosts.map(job => job.id === jobId ? { ...job, isPosted: true } : job);
        setJobPosts(updatedJobs);
    };

    if (!isLoggedIn) {
        return (
            <Router>
                <LoginForm onLogin={setIsLoggedIn} />
            </Router>
        );
    }

    return (
        <Router>
            <div className="bg-gray-100 min-h-screen">
                <div className="bg-blue-600 text-white py-4 text-center">
                    <h1 className="text-xl font-bold">Job Posting System</h1>
                    <nav className="mt-4">
                        <Link to="/employer" className="text-white hover:text-gray-300 mx-2">Employer Dashboard</Link>
                        <Link to="/coordinator" className="text-white hover:text-gray-300 mx-2">Coordinator Dashboard</Link>
                        <Link to="/candidate" className="text-white hover:text-gray-300 mx-2">Candidate Dashboard</Link>
                        <Link to="/recruiter" className="text-white hover:text-gray-300 mx-2">Recruiter Dashborad</Link>
                    </nav>
                </div>
                <Routes>
                    <Route path="/employer" element={<EmployerDashboard onJobSubmit={handleJobSubmit} />} />
                    <Route path="/coordinator" element={<CoordinatorDashboard jobPosts={jobPosts} onPostJob={postJob} />} />
                    <Route path="/candidate" element={<CandidateDashboard />}>
                        <Route index element=
                            {
                                <div className="text-center p-4">
                                    <h2 className="text-2xl text-black">Welcome to the Candidate Dashboard</h2>
                                    <p className="mt-4 text-black">Select an action.</p>
                                </div>
                             } />
                        <Route path="create-account" element={<CreateAccount />} />
                        <Route path="view-jobs" element={<ViewJobs jobPosts={jobPosts.filter(job => job.isPosted)} />} />
                        <Route path="apply-job" element={<ApplyJob />} />
                    </Route>
                    <Route path="/recruiter" element={<RecruiterDashboard/>} />
                    <Route path="/" element={
                        <div className="text-center p-4">
                            <h2 className="text-2xl text-black">Welcome to the Job Posting System</h2>
                            <p className="mt-4 text-black">Please select a dashboard to get started.</p>
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
