import Pagination from "./sub-components/Pagination"
import React, { useState, useEffect } from 'react';



function JobsPage() {
const [jobs, setJobs] = useState([])
const [currentPage, setCurrentPage] = useState(1)
const [postsPerPage, setPostsPerPage] = useState(5)

useEffect(() => {
    fetch('/jobs')
    .then(res => res.json())
    .then(data => setJobs(data))
},[])

console.log(jobs)

const numberOfJobs = jobs.length;
const firstIndex = (currentPage * postsPerPage) - postsPerPage;
const lastIndex = currentPage * postsPerPage
const pageNumbers = Math.ceil(numberOfJobs / postsPerPage)

const currentJobs = jobs.slice(firstIndex, lastIndex)

const changePage = num => setCurrentPage(num)
console.log(currentJobs)
    

    function openJobDetail(job) {
        console.log("job id: ", job.id)
    }

    function applyForJob(job) {
        console.log("Yung Job seeker", job.id)
    }

    return (
        <>
            <div className="jobs container">
                {currentJobs.map(job => (
                    <div className="job" key={job.id}>
                        <p><b>Title: </b>{job.title}</p>
                        <p><b>Description: </b>{job.description}</p>
                        {/* <p><b>Employment Status: </b>{job.employment_type}</p> */}
                        <p><b>Salary: </b>{job.salary}</p>
                        <button onClick={() => openJobDetail(job)}>View Details</button>
                        <button onClick={() => applyForJob(job)}>Apply</button>
                        {/* <p><b>Compan</b></p>
                        <p><b></b></p> */}                        
                    </div>
                ))}
    
                
            </div>
            <div>
                <Pagination pageNumbers={pageNumbers} changePage={changePage}/>
            </div>
        </>
    )
}
export default JobsPage