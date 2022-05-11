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

    return (
            <div className="navbar container">
                {/* <button onClick={navigate("/")}>Home</button>
                <button onClick={navigate("/jobs")}>Find Jobs</button>
                <button onClick={navigate("/profile")}>Profile</button> */}

            
                <a href="/">Home</a>
                <a href="/jobs">Find Jobs</a>
                <a href="/profile">Profile</a>
                {user ? <button onClick={handleLogoutClick}>Logout</button> : null}
            </div>        
     )
}

export default Navbar;