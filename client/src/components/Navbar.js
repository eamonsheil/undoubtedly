import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Navbar({user, setUser}) {
  const navigate = useNavigate()

  function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
        navigate("/")
      }

      return user ? 
      (
            <div className="navbar container">
                <a href="/">Home</a>
                <a href="/jobs">Find Jobs</a>
                {user.is_employer ? <a href="/employer_profile">Company Profile</a> : <a href="/profile">Profile</a>}
                {user ? <button onClick={handleLogoutClick}>Logout</button> : null} 
                
            </div>        
     ) : null;
}

export default Navbar;