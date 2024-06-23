"use client"
import React from 'react';

function ViewApplicants() {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-md mt-6 mb-16">
            <h2 className="text-lg font-semibold">Applicants List</h2>
            <ul className="space-y-4 mt-4">
                
                <li className="p-4 border border-gray-300 rounded">
                    <p className="font-bold">John Doe</p>
                    <p>Applied for: Software Engineer</p>
                </li>
                <li className="p-4 border border-gray-300 rounded">
                    <p className="font-bold">Jane Smith</p>
                    <p>Applied for: Data Scientist</p>
                </li>
                
            </ul>
        </div>
    );
}

export default ViewApplicants;
