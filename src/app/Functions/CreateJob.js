"use client"
import React, { useState ,useContext } from 'react';

function CreateJob({ onSubmit }) {
    const [jobData, setJobData] = useState({
        title: '',
        location: '',
        salary: '',
        responsibilities: '',
        otherInfo: '',
        questions: [
            { question: 'Are you experience required?', answer: '' },
            { question: 'Are you willing to work at any remote position?', answer: '' },
            { question: 'Are there opportunities for promotion?', answer: '' },
            { question: 'Are you  Graduate or PostGraduate ?', answer: '' },
            { question: 'Are you willing to work flexible hours ?', answer: '' }
        ]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const parts = name.split("-");
        if (parts[0] === "answer") {
            const index = parseInt(parts[1], 10);
            const updatedQuestions = jobData.questions.map((item, idx) => (
                idx === index ? { ...item, answer: value } : item
            ));
            setJobData({ ...jobData, questions: updatedQuestions });
        } else {
            setJobData({ ...jobData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(jobData);
        setJobData({
            title: '',
            location: '',
            salary: '',
            responsibilities: '',
            otherInfo: '',
            questions: []
        });
    };

    return (
        <main className="max-w-4xl mx-auto p-8 bg-white shadow-md mt-6 mb-16">
            <form onSubmit={handleSubmit} className="space-y-6">
                <section>
                    <h2 className="text-lg font-semibold">Job Description</h2>
                    <label htmlFor="title" className="block font-medium text-gray-700 mt-3">Job Title:</label>
                    <input type="text" id="title" name="title" required value={jobData.title} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" />

                    <label htmlFor="location" className="block font-medium text-gray-700 mt-3">Location:</label>
                    <input type="text" id="location" name="location" required value={jobData.location} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" />

                    <label htmlFor="salary" className="block font-medium text-gray-700 mt-3">Salary:</label>
                    <input type="text" id="salary" name="salary" required value={jobData.salary} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" />

                    <label htmlFor="responsibilities" className="block font-medium text-gray-700 mt-3">Responsibilities:</label>
                    <textarea id="responsibilities" name="responsibilities" required value={jobData.responsibilities} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1"></textarea>

                    <label htmlFor="otherInfo" className="block font-medium text-gray-700 mt-3">Other Information:</label>
                    <textarea id="otherInfo" name="otherInfo" value={jobData.otherInfo} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1"></textarea>
                </section>

                <section>
                    <h2 className="text-lg font-semibold">Job Questions</h2>
                    {jobData.questions.map((item, index) => (
                        <div key={index} className="mb-4">
                            <p className="block font-medium text-gray-700">{item.question}</p>
                            <div className="flex items-center">
                                <label className="inline-flex items-center mr-4">
                                    <input
                                        type="radio"
                                        name={`answer-${index}`}
                                        value="Yes"
                                        checked={item.answer === 'Yes'}
                                        onChange={handleChange}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">Yes</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name={`answer-${index}`}
                                        value="No"
                                        checked={item.answer === 'No'}
                                        onChange={handleChange}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>
                    ))}
                </section>

                <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Submit Job</button>
            </form>
        </main>
    );
}

export default CreateJob;
