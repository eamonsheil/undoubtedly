


function JobDetail({job, showApplications}) {
    
    
    function deleteJob(job) {
        fetch(`/jobs/${job.id}`, {
            method: "DELETE"
        })
        .then( error => console.log(error));
    }


    console.log(job)
    
    return ( 
        <div className="job-detail">
            <p><strong>{job.title}</strong></p>
            <p>{job.description}</p>
            <p>{job.employment_type}</p>
            <p>{job.remote}</p>
            <p>{job.required_skills}</p>
            <p>{job.salary}</p>
            <div>
                <button onClick={() => showApplications(job)}>View Applicants</button>
                <button onClick={() => deleteJob(job)}>Remove Job listing</button>
            </div>
        </div>
     );
}

export default JobDetail;