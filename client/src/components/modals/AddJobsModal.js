import AddJobForm from "../sub-components/AddJobForm";

function AddJobsModal({user, setUser, setJobsModalOpen}) {
    return ( 
        <>
             <div className="modal-background-mask" onClick={() => setJobsModalOpen(false)}/>

            <div className="modal centered">
                <h3>Time to Create your First Job Posting!</h3>
                <AddJobForm user={user}/>
            </div>
        </>
     );
}

export default AddJobsModal;