"use client"

import React from 'react';

function CoordinatorDashboard({ jobPosts = [], onPostJob }) {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-md mt-6 mb-16">
            <h2 className="text-lg font-semibold">Coordinator Dashboard</h2>
            <ul className="space-y-4 mt-4">
                {jobPosts.length === 0 ? (
                    <p>No jobs posted yet.</p>
                ) : (
                    jobPosts.map((job, index) => (
                        <li key={index} className="p-4 border border-gray-300 rounded">
                            <p className="font-bold">{job.title}</p>
                            <p>Location: {job.location}</p>
                            <p>Salary: {job.salary}</p>
                            <p>Responsibilities: {job.responsibilities}</p>
                            <p>Other Information: {job.otherInfo}</p>
                            <p className={`font-bold ${job.isPosted ? 'text-green-600' : 'text-red-600'}`}>
                                {job.isPosted ? 'Posted' : 'Pending'}
                            </p>

                            {!job.isPosted && (
                                <button onClick={() => onPostJob(job.id)} className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded">
                                    Post Job
                                </button>
                            )}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default CoordinatorDashboard;
