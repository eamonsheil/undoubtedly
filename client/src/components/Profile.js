import { useState, useEffect } from 'react'
import AddSkillsModal from './modals/AddSkillsModal';
import AddJobsModal from './modals/AddJobsModal';

function Profile({ user, setUser }) {
    const [skillsModalOpen, setSkillsModalOpen] = useState(false)
    

    console.log(user)
    setTimeout(() => (user.skills.length === 0 ? setSkillsModalOpen(true) : console.log(user.skills)), 500)
        

     return user ? ( 
        <div className="profile container">
        {skillsModalOpen ? <AddSkillsModal user={user} setUser={setUser} setSkillsModalOpen={setSkillsModalOpen}/> : null }
            <div className="profile-info-container">
                <p>{user.email}</p>
            </div>
            <div className="jobs-info-container">

            </div>
        </div>
     ) : null;
}

export default Profile;