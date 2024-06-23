"use client"
import React, { useState, useEffect } from 'react';

function ApplyButton({ jobQuestions = [] }) {
    const [formData, setFormData] = useState({
        name: '',
        college: '',
        branch: '',
        cgpa: '',
        yearOfGraduation: '',
        skills: '',
        responses: jobQuestions.map(question => ({ question: question.question, answer: '' }))
    });

   

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("response-")) {
            const index = parseInt(name.split("-")[1], 10);
            const updatedResponses = formData.responses.map((item, idx) => (
                idx === index ? { ...item, answer: value } : item
            ));
            setFormData({ ...formData, responses: updatedResponses });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submission logic here, such as sending data to the server
        console.log("Form Data:", formData);
    };


    return (
        <form onSubmit={handleSubmit} className="space-y-6 p-4">
            <h2 className="text-lg font-semibold">Apply for Job</h2>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="input" />
            <input type="text" name="college" value={formData.college} onChange={handleChange} placeholder="College" className="input" />
            <input type="text" name="branch" value={formData.branch} onChange={handleChange} placeholder="Branch" className="input" />
            <input type="text" name="cgpa" value={formData.cgpa} onChange={handleChange} placeholder="CGPA" className="input" />
            <input type="text" name="yearOfGraduation" value={formData.yearOfGraduation} onChange={handleChange} placeholder="Year of Graduation" className="input" />
            <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="Skills" className="input" />

            {formData.responses.map((response, index) => (
                <div key={index}>
                    <p className="font-medium text-gray-700">{response.question}</p>
                    <input type="text" name={`response-${index}`} value={response.answer} onChange={handleChange} placeholder="Your answer" className="input" />
                </div>
            ))}

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit Application</button>

        </form>


    );
}

export default ApplyButton;
