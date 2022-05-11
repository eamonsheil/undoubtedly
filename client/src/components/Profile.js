
import { useState, useEffect } from 'react'
import AddSkillsModal from './modals/AddSkillsModal';
import LoginForm from './sub-components/LogInForm';
import SignupForm from "./sub-components/SignupForm";

function Profile({ user, setUser }) {
    const [skillsModalOpen, setSkillsModalOpen] = useState(false)
    console.log(user)
    setTimeout(() => (user.skills.length === 0 ? setSkillsModalOpen(true) : console.log(user.skills)), 500)
    
    // conditional rendering if logged in:
    if (user) {
        return ( 
            <div className="profile container">
            {skillsModalOpen ? <AddSkillsModal user={user} setUser={setUser} setSkillsModalOpen={setSkillsModalOpen}/> : null }
                <div className="profile-info-container">
                    
                </div>
                <div className="jobs-info-container">


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