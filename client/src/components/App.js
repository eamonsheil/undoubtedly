
import '../App.css';
import Navbar from './Navbar'
import Home from './Home'
import JobsPage from './JobsPage'
import Profile from './Profile';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom'



function App() {

  return (
    <div className="App">
    <h1>Undoubtedly</h1>
      <Navbar/>
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
