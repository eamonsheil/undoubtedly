
import '../App.css';
import Navbar from './Navbar'
import Home from './Home'
import JobsPage from './JobsPage'
import Profile from './Profile';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from "react";



function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
    <h1>Undoubtedly</h1>
      <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/jobs' element={<JobsPage/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
