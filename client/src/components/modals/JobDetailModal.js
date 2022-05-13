


function JobDetailModal({job, user, setJobDetailModalOpen}) {
    console.log(job)
   
   
    return (
        <>
            <div className="modal-background-mask" onClick={() => setJobDetailModalOpen(false)}/>
            <div className="modal centered job-modal">
                <h3>{job.title}</h3>
                <p><strong>Description: </strong>{job.description}</p>
                <p><strong>Employment type: </strong>{job.employment_type}</p>
                <p>Must have working knowledge of {job.required_skills}</p>
                {job.remote ? <p>Remote Position</p> : null}
                <p><strong>Salary: </strong>{job.salary}</p>
            
                <h3>Company: {job.employer.name}</h3>
                <p><i>{job.employer.bio}</i></p>
            </div>
        </>
     );
}

export default JobDetailModal;