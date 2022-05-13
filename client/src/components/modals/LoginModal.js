import LoginFormApplicant from "../sub-components/login-signup-forms/LogInForm";

function LoginModal({setShowLoginModal, setUser, isEmployer}) {
    return ( 
        <>
            <div className="modal-background-mask" onClick={() => setShowLoginModal(false)}/>

            <div className="login-modal modal centered">
                <h3>Login:</h3>
                <LoginFormApplicant setUser={setUser} isEmployer={isEmployer} setShowLoginModal={setShowLoginModal}/>
            </div>
        </>
     );
}

export default LoginModal;