
import { useState, useEffect } from 'react'
import AddSkillsModal from './modals/AddSkillsModal';
import LoginForm from './sub-components/LogInForm';
import SignupForm from "./sub-components/SignupForm";
import AppDetailModal from './modals/AppDetailModal';

function Profile({ user, setUser }) {
    const [skillsModalOpen, setSkillsModalOpen] = useState(false)
    const [jobApplications, setJobApplications] = useState([])
    const [appDetailModalOpen, setAppDetailModalOpen] = useState(false)
    console.log(user)
    setTimeout(() => (user.skills.length === 0 ? setSkillsModalOpen(true) : console.log(user.skills)), 500)
    
    useEffect(() => {
        // auto-login
        fetch("/job_applications").then((r) => {
          if (r.ok) {
            r.json().then((jobApps) => setJobApplications(jobApps));
          }
        });
      }, []);

    
function handleDeleteApp(id){
    fetch(`applications/${id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then((deletedApp) => handleUpdateApps(deletedApp))
       }

function handleUpdateApps(deletedApp){
    setJobApplications(jobApplications.filter((app)=>app.id != deletedApp.id))

}


      
    
    
    // conditional rendering if logged in:
    if (user) {
        return ( 
           
            <div className="profile container">
            {skillsModalOpen ? <AddSkillsModal user={user} setUser={setUser} setSkillsModalOpen={setSkillsModalOpen}/> : null }
                <div className="profile-info-container">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.bio}</p>
                </div>
               
                <div className="jobs-info-container">
                <ol>
                    {jobApplications.map(app => ( <li key={app.id}>{app.job.description}<button onClick={()=> setAppDetailModalOpen(true)}>View Details</button><button onClick={()=>handleDeleteApp(app.id)}>Withdraw Application</button>{appDetailModalOpen ? <AppDetailModal job={app.job}  setAppDetailModalOpen={setAppDetailModalOpen}/> : null} </li>

                    ))}
                </ol>
                </div>
         </div>
        )}
        
        // conditional rendering if not logged in:
        return (
        <>
        <h1>Please log in or sign up to view profile.</h1>
        <br></br>
        <br></br>
        <br></br>
        <div className="user-functions">
                <div className="login">
                {!user? <LoginForm setUser={setUser}/> : null}
                </div>
                <div className="signup">
                {!user? <SignupForm setUser={setUser} /> : null}
                </div>
            </div>
            </>
        );
}

export default Profile;