import { useState, useEffect } from 'react'
import AddJobsModal from './modals/AddJobsModal';
import JobDetail from './sub-components/JobDetail';
import ApplicantList from './sub-components/ApplicantList';
import JobOfferModal from './modals/JobOfferModal';

function EmployerProfile({ user, setUser }) {
    const [jobsModalOpen, setJobsModalOpen] = useState(false);
    const [showJobs, setShowJobs] = useState(true);
    const [jobId, setJobId] = useState();
    const [isFirstJob, setIsFirstJob] = useState(true)
    const [showJobOfferModal, setShowJobOfferModal] = useState(false);
    const [currentApplicant, setCurrentApplicant] = useState({})
    // const [currentJobs, setCurrentJobs] = useState([]);

    
    console.log(user)
    setTimeout(() => (user.jobs.length === 0 ? setJobsModalOpen(true) : console.log(user.jobs)), 500)
    

    // useEffect( () => {
    //    fetch(`url`, {
    //        method: "GET",
    //        headers: {
    //            "Content-Type": "application/json",
    //            Accept: "application/json"
    //        }
    //    })
    //    .then( res => res.json())
    //    .then( data => console.log(data))

    // },[])
    function newJob() {
        setIsFirstJob(false)
        setJobsModalOpen(true)
    }


    function showApplications(job) {
        setJobId(job)
        setShowJobs(false)
    }

    function createOffer(applicant) {
        setCurrentApplicant(applicant)
        setShowJobOfferModal(true)
    }

    return user ? (
        <div className="profile container">
        {jobsModalOpen ? <AddJobsModal user={user} setUser={setUser} setJobsModalOpen={setJobsModalOpen} isFirstJob={isFirstJob}/> : null }
            <div className="profile-info-container">
                <p><i>{user.bio}</i></p>

                <button onClick={() => newJob()}>Add a New Job</button>
                {showJobOfferModal ? <JobOfferModal setShowJobOfferModal={setShowJobOfferModal} job={jobId} currentApplicant={currentApplicant} user={user}/> : null}
            </div>
            <div className="jobs-info-container">
                { showJobs ? 
                (user.jobs.map((job) => (
                    <JobDetail key={job.id} job={job} showApplications={showApplications}/>
                ))) : 
                <>
                    <button onClick={() => setShowJobs(true)}>View all Jobs</button>
                    <ApplicantList createOffer={createOffer} jobId={jobId}/>
                </>}
            </div>
        </div>
    ): null;
    
}

export default EmployerProfile;