import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const defaultObj = {
    javascript: false,
    ruby: false,
    react: false,
    rails: false,
    frontend: false,
    backend: false
}

function AddSkillsModal({setSkillsModalOpen, user, setUser}) {
    const [skills, setSkills] = useState(defaultObj)

    const navigate = useNavigate()


    function addSkillsToProfile(e) {
        e.preventDefault()
        const userSkills = {...skills, applicant_id: user.id}
        console.log(userSkills)

       fetch(`/add_skills`, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
           },
           body: JSON.stringify(userSkills)
       })
       .then( res => res.json())
       .then( data => {
           setUser({...user, skills:data})
        setSkillsModalOpen(false)})
       
    }
    function handleFormChange(e) {
        setSkills({...skills, [e.target.name]:!skills[e.target.name]})
    }

    return ( 
        <>
            <div className="modal-background-mask" onClick={() => setSkillsModalOpen(false)}/>

            <div className="modal centered">
                <h3>Select Some Skills to complete your Profile!</h3>
                <form onSubmit={(e) => addSkillsToProfile(e)}>
                <div>
                    <label for="javascript">javascript</label>
                    <input type="checkbox" name="javascript" checked={skills.javascript}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <label for="ruby">ruby</label>
                    <input type="checkbox" name="ruby" checked={skills.ruby}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <label for="react">react</label>
                    <input type="checkbox" name="react" checked={skills.react}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <label for="rails">rails</label>
                    <input type="checkbox" name="rails" checked={skills.rails}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <label for="frontend">frontend</label>
                    <input type="checkbox" name="frontend" checked={skills.frontend}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <label for="backend">backend</label>
                    <input type="checkbox" name="backend" checked={skills.backend}
                        onChange={handleFormChange}
                    />
                </div>
                <input type="submit"/>
                </form>
            </div>
            
        </>
     );
}

export default AddSkillsModal;