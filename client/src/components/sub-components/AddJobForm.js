import { useState } from 'react'

const defaultObj = {
    title: "",
    description: "",
    employment_type: "",
    salary: "",
    required_skills: "",
    remote: false
}

function AddJobForm({user}) {
    const [formData, setFormData] = useState(defaultObj)
    
    function handleFormChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function createJob() {
        const newJob = {...formData, employer_id: user.id}
        fetch(`/new_job`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newJob)
        })
        .then( res => res.json())
        .then( data => console.log(data))
    }
    
    return ( 
        <>
            <form onSubmit={createJob}>
                <label htmlFor="title">Title: </label>
                    <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={(e) => handleFormChange(e)}
                    />
                
            
                <label htmlFor="description">Job Description: </label>
                    <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={(e) => handleFormChange(e)}
                    />
                
                
            
                <label htmlFor="employment_type">Employment Status: </label>
                    <input
                    type="text"
                    name="employment_type"
                    value={formData.employment_type}
                    onChange={(e) => handleFormChange(e)}
                    />
                
                
            
                <label htmlFor="salary">Salary: </label>
                    <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={(e) => handleFormChange(e)}
                    />
                
                
                <p>Required Skill (choose one):</p>
                <div>
                    <input type="radio" 
                        id="javascript" 
                        name="required_skills" 
                        value="javascript"
                        checked={formData.required_skills === "javascript"}
                        onChange={(e) => handleFormChange(e)}
                        />
                    <label htmlFor="javascript">Javascript</label>
                </div>

                <div>
                    <input type="radio" 
                        id="ruby" 
                        name="required_skills" 
                        value="ruby"
                        checked={formData.required_skills === "ruby"}
                        onChange={(e) => handleFormChange(e)}
                        />
                    <label htmlFor="ruby">Ruby</label>
                </div>
                
                <div>
                    <input type="radio" 
                        id="react" 
                        name="required_skills" 
                        value="react"
                        checked={formData.required_skills === "react"}
                        onChange={(e) => handleFormChange(e)}
                        />
                    <label htmlFor="react">React</label>
                </div>

                <div>
                    <input type="radio" 
                        id="rails" 
                        name="required_skills" 
                        value="rails"
                        checked={formData.required_skills === "rails"}
                        onChange={(e) => handleFormChange(e)}
                        />
                    <label htmlFor="rails">Rails</label>
                </div>

                <div>
                    <input type="radio" 
                        id="frontend" 
                        name="required_skills" 
                        value="frontend"
                        checked={formData.required_skills === "frontend"}
                        onChange={(e) => handleFormChange(e)}
                        />
                    <label htmlFor="frontend">Frontend</label>
                </div>

                <div>
                    <input type="radio" 
                        id="backend" 
                        name="required_skills" 
                        value="backend"
                        checked={formData.required_skills === "backend"}
                        onChange={(e) => handleFormChange(e)}
                        />
                    <label htmlFor="backend">Backend</label>
                </div>
                
                <input type="submit" value="Create Job"/>
            </form>
        </>
     );
}

export default AddJobForm;