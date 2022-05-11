import SignupForm from "./sub-components/SignupForm";
import LoginForm from "./sub-components/LogInForm";


function Home({user, setUser}) {
    
    return (  

        <div className="home container" >
            <h1>Home Page</h1>
            <div className="welcome">
                <p>Explanation of website, etc etc</p>
            </div>
            <div className="user-functions">
                
                <div className="login">
                {!user? <LoginForm setUser={setUser}/> : null}
                </div>
                <div className="login">
                    <button>Login</button>
                </div>
                <div className="signup">
                    <button>Register as Applicant</button>
                    <button>Register as Employer</button>
                </div>
                <div className="signup">
                {!user? <SignupForm setUser={setUser}/> : null}
                </div>
            </div>
        </div>
    );
}

export default Home;