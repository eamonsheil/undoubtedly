import { useEffect, useState } from "react"

function ApplicantList({ jobId, createOffer }) {
    const [currentApplicants, setCurrentApplicants] = useState([])
    


    useEffect( () => {
        fetch(`/job_applicants/${jobId.id}`)
        .then( res => res.json())
        .then( data => setCurrentApplicants(data))
    },[])
    
    
        

    
    return currentApplicants.length !== 0 ? ( 
        <div className="job-applicant">
            <h2>Applicants for {jobId.title}</h2>
            {currentApplicants.map((app) => (
                <div key = {app.id}>
                    <p><strong>{app.applicant.name}</strong></p>
                    <p>{app.applicant.bio}</p>
                    <p>{app.applicant.email}</p>
                    <button onClick={() => createOffer(app.applicant)}>Make Job offer</button>
                    
                </div>
                ))
            }
            
        </div>
     ) : (
        <>
            <h2>Looks Like No one has applied for this job</h2>
            <p>...yet</p>
        </>
    )
}

export default ApplicantList;