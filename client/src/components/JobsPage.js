import Pagination from "./sub-components/Pagination"
import JobDetailModal from "./modals/JobDetailModal";
import React, { useState, useEffect } from 'react';



function JobsPage({user, setUser}) {
const [jobs, setJobs] = useState([])
const [currentPage, setCurrentPage] = useState(1)
const [postsPerPage, setPostsPerPage] = useState(5)
const [jobDetailModalOpen, setJobDetailModalOpen] = useState(false)


useEffect(() => {
    fetch(`/job_matches`)
    .then(res => res.json())
    .then(data => setJobs(data))
},[])




const numberOfJobs = jobs.length;
const firstIndex = (currentPage * postsPerPage) - postsPerPage;
const lastIndex = currentPage * postsPerPage
const pageNumbers = Math.ceil(numberOfJobs / postsPerPage)

const currentJobs = jobs.slice(firstIndex, lastIndex)

const changePage = num => setCurrentPage(num)
// console.log(currentJobs)
    

    function applyForJob(job) {
        console.log("Yung Job seeker", job.id)

       fetch(`/apply`, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
           },
           body: JSON.stringify({
               applicant_id: user.id,
               job_id: job.id
           })
       })
       .then( res => res.json())
       .then( data => console.log(data))

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
                        <button onClick={() => setJobDetailModalOpen(true)}>View Details</button>
                        {jobDetailModalOpen ? <JobDetailModal job={job} user={user} setJobDetailModalOpen={setJobDetailModalOpen}/> : null}
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