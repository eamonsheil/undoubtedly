import SignupForm from "./sub-components/login-signup-forms/SignupForm";
import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";
import { useState } from 'react'

function Home({user, setUser, isEmployer, setIsEmployer}) {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    // const [showSignupEmployer, setShowSignupEmployer] = useState(false);
    // const [isEmployer, setIsEmployer] = useState(false);
    
    function loginApplicant() {
        setShowLoginModal(true)
        setIsEmployer(false)
    }
    
    function loginEmployer() {
        setShowLoginModal(true)
        setIsEmployer(true)
    }

    function registerApplicant() {
        setShowSignupModal(true)
        setIsEmployer(false)
    }

    function registerEmployer() {
        setShowSignupModal(true)
        setIsEmployer(true)
    }

    return (  

        <div className="home container" >
            <h1>Home Page</h1>
            <div className="welcome">
                <p>Explanation of website, etc etc</p>
                {!user ? <h2>Login or Signup to get Started!</h2> : null}
            </div>

            <div className="user-functions">
               
                <div className="login">
                    <button onClick={loginApplicant}>Login as Applicant</button>
                    <button onClick={loginEmployer}>Login as Employer</button>
                        {showLoginModal ? 
                        <LoginModal 
                            setUser={setUser} 
                            setShowLoginModal={setShowLoginModal} 
                            isEmployer={isEmployer}/> 
                        : null}
                </div>

                <div className="signup">
                    <button onClick={registerApplicant}>Register as Applicant</button>
                    <button onClick={registerEmployer}>Register as Employer</button>
                    {showSignupModal ?
                    <SignupModal 
                        setUser={setUser} 
                        setShowSignupModal={setShowSignupModal}
                        isEmployer={isEmployer} 
                        />
                    : null}
                </div>

{/* 
                <div className="signup">
                    {!user? <SignupForm 
                        setUser={setUser} 
                        isEmployer={isEmployer}/>
                    : null}
                </div> */}
            </div>



        </div>
    );
}

export default Home;