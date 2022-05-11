import {useEffect} from 'react'
import LoginForm from './sub-components/LogInForm';
import SignupForm from "./sub-components/SignupForm";

function Profile({ user, setUser }) {
    console.log(user)
    // conditional rendering if logged in:
    if (user) {
        return ( 
        
            <div className="profile container">
                <div className="profile-info-container">
                <h1>Hello</h1>
                </div>
                <div className="jobs-info-container">

                </div>
         </div>
        )}
        
        // conditional rendering if not logged in:
        return (
        <>
        <h1>Please log in or sign up to view profile.</h1>
        <br></br>
        <br></br>
        <br></br>
        <div className="user-functions">
                <div className="login">
                {!user? <LoginForm setUser={setUser}/> : null}
                </div>
                <div className="signup">
                {!user? <SignupForm setUser={setUser} /> : null}
                </div>
            </div>
            </>
        );
}

export default Profile;