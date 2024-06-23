"use client"
import React, { createContext, useState, useContext } from 'react';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);

    const addJob = (job) => {
        setJobs(prevJobs => [...prevJobs, { ...job, id: prevJobs.length + 1 }]);
    };

    return (
        <JobContext.Provider value={{ jobs, addJob }}>
            {children}
        </JobContext.Provider>
    );
};

export const useJobs = () => useContext(JobContext);
