import SignUpForm from "../sub-components/login-signup-forms/SignupForm";

function SignupModal({setUser, isEmployer, setShowSignupModal}) {
    return ( 
        <>
            <div className="modal-background-mask" onClick={() => setShowSignupModal(false)}/>

            <div className="modal centered">
                <h3>Login:</h3>
                <SignUpForm setUser={setUser} isEmployer={isEmployer} setShowSignupModal={setShowSignupModal}/>
            </div>
        </>
     );
}

export default SignupModal;