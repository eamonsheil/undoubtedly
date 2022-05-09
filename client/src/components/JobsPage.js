import Pagination from "./sub-components/Pagination"
import React, { useState, useEffect } from 'react';



function JobsPage() {
const [jobs, setJobs] = useState([])
const [currentPage, setCurrentPage] = useState(1)
const [postsPerPage, setPostsPerPage] = useState(10)

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
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
    

    return (
        <>
            <div className="jobs container">
                {currentJobs.map(job => (
                    <div className="job" key={job.id}><p><b>Title: </b>{job.title}</p><b>Description: </b>{job.body}</div>
                ))}
    
                
            </div>
            <div>
                <Pagination pageNumbers={pageNumbers} changePage={changePage}/>
            </div>
        </>
    )
}
export default JobsPage