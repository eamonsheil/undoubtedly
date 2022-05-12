import { useState } from 'react'

const defaultObj = {
    title: "",
    description: "",
    employment_type: "",
    salary: "",
    required_skills: "",
    remote: false,
}

function AddJobForm() {
    const[formData, setFormData] = useState(defaultObj)
    
    function handleFormChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function createJob() {
        fetch(`/new_job`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then( res => res.json())
        .then( data => console.log(data))
    }
    
    return ( 
        <>
            <form onSubmit={createJob}>
                <label htmlFor="title">Title: 
                <input
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) => handleFormChange(e)}
                />
                </label>
            
                <label htmlFor="description">Job Description: 
                    <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={(e) => handleFormChange(e)}
                    />
                </label>
                
            
                <label htmlFor="employment_type">Employment Status: 
                    <input
                    type="text"
                    name="employment_type"
                    value={formData.employment_type}
                    onChange={(e) => handleFormChange(e)}
                    />
                </label>
                
            
                <label htmlFor="salary">Salary: 
                    <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={(e) => handleFormChange(e)}
                    />
                </label>
                
                {/* <p>Required Skill (choose one):</p> */}
                <div>
                    <input type="radio" id="javascript" name="javascript" value="javascript"/>
                    <label htmlFor="javascript">Javascript</label>
                </div>

                <div>
                    <input type="radio" id="ruby" name="ruby" value="ruby"/>
                    <label htmlFor="ruby">Ruby</label>
                </div>
                
                <div>
                    <input type="radio" id="react" name="react" value="react"/>
                    <label htmlFor="react">React</label>
                </div>

                <div>
                    <input type="radio" id="rails" name="rails" value="rails"/>
                    <label htmlFor="rails">Rails</label>
                </div>

                <div>
                    <input type="radio" id="frontend" name="frontend" value="frontend"/>
                    <label htmlFor="frontend">Frontend</label>
                </div>

                <div>
                    <input type="radio" id="backend" name="backend" value="backend"/>
                    <label htmlFor="backend">Backend</label>
                </div>
                
                <input type="submit">Sign Up</input>
            </form>
        </>
     );
}

export default AddJobForm;