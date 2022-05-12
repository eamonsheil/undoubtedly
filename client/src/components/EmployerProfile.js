import { useState, useEffect } from 'react'
import AddJobsModal from './modals/AddJobsModal';

function EmployerProfile({ user, setUser }) {
    const [jobsModalOpen, setJobsModalOpen] = useState(false);
    
    setTimeout(() => (user.jobs.length === 0 ? setJobsModalOpen(true) : console.log(user.jobs)), 500)
    // console.log(user.jobs)




    return (
        <div className="profile container">
        {jobsModalOpen ? <AddJobsModal user={user} setUser={setUser} setJobsModalOpen={setJobsModalOpen}/> : null }
            <div className="profile-info-container">
                
            </div>
            <div className="jobs-info-container">

            </div>
        </div>
    );
}

export default EmployerProfile;