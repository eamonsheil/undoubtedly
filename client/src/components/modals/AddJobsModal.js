import AddJobForm from "../sub-components/AddJobForm";

function AddJobsModal({user, setUser, setJobsModalOpen, isFirstJob}) {
    return ( 
        <>
             <div className="modal-background-mask" onClick={() => setJobsModalOpen(false)}/>

            <div className="modal centered">
           {isFirstJob ? <h3>Time to Create your First Job Posting!</h3> : null}
                <AddJobForm user={user}/>
            </div>
        </>
     );
}

export default AddJobsModal;