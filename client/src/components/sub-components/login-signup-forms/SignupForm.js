import React, { useState } from "react";
import { useNavigate } from 'react-router-dom' 


const defaultObj = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  bio: ""
}

function SignUpForm({setUser, isEmployer, setShowSignupModal}) {
  const [formData, setFormData] = useState(defaultObj) 
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    function handleFormChange(e) {
      setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
      setIsLoading(true);
      
      fetch(isEmployer ? "/signup_employer" : "/signup_applicant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => setUser(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
      setShowSignupModal(false)
      navigate("/profile")
    }

    return (
      <form onSubmit={handleSubmit}>
          
          <label for="name">Name: 
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleFormChange(e)}
            />
          </label>
      
          <label for="password">Password: 
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleFormChange(e)}
            />
          </label>
        
       
          <label for="password">Confirm Password: 
            <input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={(e) => handleFormChange(e)}
            />
          </label>
        
       
          <label for="email">Email: 
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={(e) => handleFormChange(e)}
            />
          </label>
        
       
          <label for="bio">Bio: 
            <textarea
              name="bio"
              rows="3"
              value={formData.bio}
              onChange={(e) => handleFormChange(e)}
            />
          </label>
          
          <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        
       
          
        
      </form>
    );
  }
  
  export default SignUpForm;