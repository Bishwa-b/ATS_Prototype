"use client"
import React, { useState } from 'react';

function JobApplicationForm({ questions }) {
    const [responses, setResponses] = useState(
        questions.map(question => ({
            question: question.question,
            answer: ''
        }))
    );

    const handleChange = (index, value) => {
        const newResponses = responses.map((response, i) => {
            if (i === index) {
                return { ...response, answer: value };
            }
            return response;
        });
        setResponses(newResponses);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Responses Submitted:', responses);
        // Here you might send the responses to a server or another state management system
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-white shadow-md mt-6 mb-16">
            <h2 className="text-lg font-semibold">Answer the Following Questions (Answer with YES/NO)</h2>
            {responses.map((response, index) => (
                <div key={index} className="mb-4">
                    <p className="block font-medium text-gray-700">{response.question}</p>
                    <input
                        type="text"
                        value={response.answer}
                        onChange={(e) => handleChange(index, e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        placeholder="Your answer here"
                    />
                </div>
            ))}
            
        </form>
    );
}

export default JobApplicationForm;
