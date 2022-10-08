import React, { useState } from "react";

function Contact(){
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[msg, setMsg] = useState("");
    function handleSubmit(e: any){
        e.preventDefault();
       
    }
    return(
        <div className="contact-form-container">
            {/* {formStatus === false ? <Warning /> : null} */}
            <form className="contact-form" onSubmit={(e: React.SyntheticEvent) => {handleSubmit(e)}}>
                <div className="form-group">

                <label>Name</label>
                <input className="form-control" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} ></input>
                
                <label>Email</label>
                <input className="form-control" type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                
                <label>Your Message</label>
                <textarea className="form-control" rows={parseFloat("3")} placeholder="Type something..." value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>

                <button type="submit" className="btn btn-success">Send</button>
                </div>     
            </form>
        </div>
    )
}
export default Contact;