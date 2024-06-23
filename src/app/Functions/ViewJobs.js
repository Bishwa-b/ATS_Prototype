"use client"
import React from 'react';
import ApplyButton from '../Functions/ApplyButton';
import JobApplicationForm from '../Functions/JobApplyForm';  // Ensure this import path is correct

const ViewJobs = ({ jobPosts, onApplicationSubmit }) => {
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold my-4">Available Jobs</h2>
            <ul>
                {jobPosts.length === 0 ? (
                    <p>No available jobs at the moment.</p>
                ) : (
                    jobPosts.map(job => (
                        <li key={job.id} className="mb-4 p-2 border border-gray-300 rounded">
                            <h3 className="font-bold">{job.title}</h3>
                            <p>{job.description}</p>
                            <p>Location: {job.location}</p>
                            <p>Salary: {job.salary}</p>
                            <ApplyButton />  
                            <JobApplicationForm questions={job.questions} onSubmit={(formData) => {
                               
                                const applicationData = {
                                    jobId: job.id,
                                    jobTitle: job.title,
                                    details: formData
                                };
                                onApplicationSubmit(applicationData);
                            }} />
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default ViewJobs;
