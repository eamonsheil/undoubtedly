
function AppDetailModal({job, user, setAppDetailModalOpen}) {
   
   
    return (
        <>
            <div className="modal-background-mask" onClick={() => setAppDetailModalOpen(false)}/>
            <div className="modal centered">
                {console.log(job)}
            <h3>{job.title}</h3>
                {/* <p><strong>Description: </strong>{job.description}</p>
                <p><strong>Employment type: </strong>{job.employment_type}</p>
                <p>Must have working knowledge of {job.required_skills}</p>
                {job.remote ? <p>Remote Position</p> : null}
                <p><strong>Salary: </strong>{job.salary}</p>
            
                <h4>Company: {job.employer.name}</h4>
                <p><i>{job.employer.bio}</i></p> */}
                
            </div>
        </>
     );
}

export default AppDetailModal;