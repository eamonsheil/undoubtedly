
import { useState, useEffect } from 'react'
import AddSkillsModal from './modals/AddSkillsModal';
import AppDetailModal from './modals/AppDetailModal';

function Profile({ user, setUser }) {
    const [skillsModalOpen, setSkillsModalOpen] = useState(false)
    const [jobApplications, setJobApplications] = useState([])
    // const [appDetailModalOpen, setAppDetailModalOpen] = useState(false)
    // const [showOffers, setShowOffers] = useState();
    const [jobOffers, setJobOffers] = useState([]);

    // const [currentApp, setCurrentApp] = useState({})

    setTimeout(() => (user.skills.length === 0 ? setSkillsModalOpen(true) : null), 500)

    useEffect(() => {
        fetch("/job_applications").then((r) => {
          if (r.ok) {
            r.json().then((jobApps) => setJobApplications(jobApps));
          }
        });
      }, []);

    
      console.log(jobApplications)

    
function handleDeleteApp(id){
    fetch(`applications/${id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then((deletedApp) => handleUpdateApps(deletedApp))
       }

function handleUpdateApps(deletedApp){
    setJobApplications(jobApplications.filter((app)=>app.id !== deletedApp.id))

}

// function showAppDetails(job) {
//     setAppDetailModalOpen(true)
//     setCurrentApp(job)

// }

function viewOffers() {
    console.log(user)
    const id = user.id
    fetch(`/offers/${id}`)
    .then( res => res.json())
    .then( data => setJobOffers(data))
}

function acceptOffer(offer) {
    console.log(offer)
}

function denyOffer(offer) {
    console.log(offer)
    fetch(`/offers/${offer.id}`, {
        method: "DELETE"
    })
    .catch( error => console.log(error.message));
}


    if (user){
        return ( 
           <>
            <div className="profile container">
            {skillsModalOpen ? <AddSkillsModal user={user} setUser={setUser} setSkillsModalOpen={setSkillsModalOpen}/> : null }
                
                <div className="profile-info-container">
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                  <p>{user.bio}</p>
                </div>
               
                <div className="jobs-info-container">

                {/* <ol>
                    {jobApplications.map(app => ( <li key={app.id}>{app.job.description}<button onClick={()=> showAppDetails(app.job)}>View Details</button><button onClick={()=>handleDeleteApp(app.id)}>Withdraw Application</button> </li>
                    ))}
                </ol>
                {appDetailModalOpen ? <AppDetailModal job={currentApp}  setAppDetailModalOpen={setAppDetailModalOpen}/> : null} */}
                {/* {appDetailModalOpen ? <AppDetailModal job={currentApp}  setAppDetailModalOpen={setAppDetailModalOpen}/> : null} */}
                  <div>
                        <h2>My Applications</h2>
                      {jobApplications.map(app => { 
                          console.log(app)
                        
                        return <div >
                            <p><strong>Description: </strong>{app.job.description}</p>
                            <p><strong>Employment type: </strong>{app.job.employment_type}</p>
                            <p>Must have working knowledge of {app.job.required_skills}</p>
                            {app.job.remote ? <p>Remote Position</p> : null}
                            <p><strong>Salary: </strong>{app.job.salary}</p>
                            <button onClick={()=>handleDeleteApp(app.id)}>Withdraw Application</button>
                            
                            
                            {/* <h4>Company: {app.employer.name}</h4>
                            <p><i>{app.employer.bio}</i></p> */}
                        </div>
                          
                          
                          
                      })}

                      {/* <li key={app.id}>{app.job.description}
                          <button onClick={()=> showAppDetails(app.job)}>View Details</button>
                          <button onClick={()=>handleDeleteApp(app.id)}>Withdraw Application</button>
                           
                          </li> */}
                  </div>
                  

                </div>
            </div>
            <div className='job-offers container'>
            <button onClick={() => viewOffers()}>View Job Offers</button>
                <h2>My Job Offers</h2>
                {jobOffers.map((offer) => (
                        <>
                            <p>{offer.job_title}</p>
                            <p>{offer.message}</p>
                            <p>{offer.salary}</p>
                            <button onClick={() => acceptOffer(offer)}>Accept Offer</button>
                            <button onClick={() => denyOffer(offer)}>Deny Offer</button>
                            
                        </>
                        
                      
                    ))}
            </div>
         </>
        )}
}
        
        
       


export default Profile;