import React, { useState } from "react";

function SignUpForm({  }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
      setIsLoading(true);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
          name,
          bio,
          email,
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => console.log(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  
    return (
      <form onSubmit={handleSubmit}>
          
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
       
          
       
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username-signup"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        
       
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password-signup"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        
       
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
        
       
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        
       
          <label htmlFor="bio">Bio</label>
          <textarea
            rows="3"
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        
       
          <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        
       
          
        
      </form>
    );
  }
  
  export default SignUpForm;