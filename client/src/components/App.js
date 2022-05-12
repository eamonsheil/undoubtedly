
import '../App.css';
import Navbar from './Navbar'
import Home from './Home'
import JobsPage from './JobsPage'
import Profile from './Profile';
import EmployerProfile from './EmployerProfile';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from "react";

// const defaultObj = {
//   skills: []
// }
function App() {
  const [user, setUser] = useState(null);
  const [isEmployer, setIsEmployer] = useState(false);

 

  useEffect(() => {
    // auto-login
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json()
    .then((data) => setUser(data));
      }
    })
  }, []);
  // console.log(user.is_employer)
  // setTimeout(() => (user.is_employer ?  setIsEmployer(true) : setIsEmployer(false)), 500)

  // console.log(user.is_employer)
  return (
    <div className="App">
    <h1>Undoubtedly</h1>
    {user ? <h4>Welcome, {user.name}</h4> : null}
      <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route path='/' element={<Home user={user} setUser={setUser} setIsEmployer={setIsEmployer} isEmployer={isEmployer}/>}/>
          <Route path='/jobs' element={<JobsPage user={user} setUser={setUser}/>}/>
          <Route path='/profile' element={<Profile user={user} setUser={setUser} isEmployer={isEmployer}/>}/>
          <Route path='/employer_profile' element={<EmployerProfile user={user} setUser={setUser}/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;