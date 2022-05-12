
function AppDetailModal({job, user, setAppDetailModalOpen}) {
   
   
    return (
        <>
            <div className="modal-background-mask" onClick={() => setAppDetailModalOpen(false)}/>
            <div className="modal centered">
               
                {console.log(job)}
            </div>
        </>
     );
}

export default AppDetailModal;