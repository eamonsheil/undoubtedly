import LoginForm from "./sub-components/LoginForm";
import SignupForm from "./sub-components/SignupForm";

function Home() {
    
    return (  

        <div className="home container" >
            <h1>Home Page</h1>
            <div className="welcome">
                <p>Explanation of website, etc etc</p>
            </div>
            <div className="user-functions">
                <div className="login">
                    <LoginForm />
                </div>
                <div className="signup">
                    <SignupForm />
                </div>
            </div>
        </div>
    );
}

export default Home;