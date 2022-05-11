import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultObj = {
  email: "",
  password: ""
}

function LoginForm({ setUser }) {
  const [formData, setFormData] = useState(defaultObj) 
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()
  
  function handleFormChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
}

    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/applicant_login", {
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
      })
      // setFormData(defaultObj)
      // .then(navigate("/profile"));
    }
  
    return (
      <form onSubmit={handleSubmit}>
        
          <label for="email">Email: 
            <input
              type="text"
              name="email"
              autoComplete="off"
              value={formData.email}
              onChange={(e) => handleFormChange(e)}
            />
          </label>
       
        
          <label for="password">Password: 
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={(e) => handleFormChange(e)}
            />
          </label>
        
          <button variant="fill" color="primary" type="submit">
            {isLoading ? "Loading..." : "Login"}
          </button>
      </form>
    );
  }
  
  export default LoginForm;