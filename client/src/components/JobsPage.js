import Pagination from "./sub-components/Pagination"
import React, { useState, useEffect } from 'react';



function JobsPage() {
const [jobs, setJobs] = useState([])
const [currentPage, setCurrentPage] = useState(1)

    

    return (
        <div className="jobs container">
            <h6>Jobs go here</h6>
            <Pagination/>
        </div>
    )
}
export default JobsPage