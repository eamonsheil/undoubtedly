import { useState } from 'react';



function JobOfferModal({ job, setShowJobOfferModal, currentApplicant, user}) {
    const [formData, setFormData] = useState({
        employer_id: user.id,
        applicant_id: currentApplicant.id,
        salary: 0,
        message: "",
        job_title: job.title
    });

    console.log(job)
    
    function handleFormChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    
    function makeOffer(e) {
        e.preventDefault()
        console.log(formData)
       fetch(`/offers`, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
           },
           body: JSON.stringify(formData)
       })
       .then( res => res.json())
       .then( data => console.log(data)) 
        setShowJobOfferModal(false)
    }
    
    return ( 
        <>
            <div className="modal-background-mask" onClick={() => setShowJobOfferModal(false)}/>

            <div className="modal centered">
                <h3>Make an offer to {currentApplicant.name}:</h3>
                <form onSubmit={(e) => makeOffer(e)}>
                    <label for="name">Send a congratulations message: 
                        <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleFormChange(e)}
                        />
                    </label>
                
                    <label for="password">Salary offer: 
                        <input
                        type="number"
                        name="salary"
                        value={formData.salary}
                        onChange={(e) => handleFormChange(e)}
                        />
                    </label>
                    <input type="submit"></input>
                </form>
                
            </div>
        </>
     );
}

export default JobOfferModal;