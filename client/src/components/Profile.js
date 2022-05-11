import { useState, useEffect } from 'react'
import AddSkillsModal from './modals/AddSkillsModal';

function Profile({ user, setUser }) {
    const [skillsModalOpen, setSkillsModalOpen] = useState(false)
        console.log(user)
        setTimeout(() => (user.skills.length === 0 ? setSkillsModalOpen(true) : console.log(user.skills)), 500)
    


    return ( 
        <div className="profile container">
        {skillsModalOpen ? <AddSkillsModal user={user} setUser={setUser} setSkillsModalOpen={setSkillsModalOpen}/> : null }
            <div className="profile-info-container">
                
            </div>
            <div className="jobs-info-container">

            </div>
        </div>
     );
}

export default Profile;