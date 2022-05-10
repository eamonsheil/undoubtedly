import React, { useState } from "react";

function Navbar({user, setUser}) {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    return (
            <div className="navbar container">
                <a href="/">Home</a>
                <a href="/jobs">Find Jobs</a>
                <a href="/profile">Profile</a>
                <button onClick={handleLogoutClick}>
                Logout
                </button>
            </div>        
     )
}

export default Navbar;