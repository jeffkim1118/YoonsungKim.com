import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Warning from "./warning";
import Success from "./success";

function Contact(){
    const[name, setName] = React.useState<string>("");
    const[email, setEmail] = React.useState<string>("");
    const[content, setContent] = React.useState<string>("");
    const[formStatus, setStatus] = React.useState<boolean>();
    const form = useRef(null);
    function handleSubmit(e: any){
        e.preventDefault();
        // Check if each inputs are filled correctly.
        if(name === "" || email === "" || content === ""){
            setStatus(false)
            // Else, continue on sending email.
        }else{
            const currentForm = form.current
        if(currentForm == null) return;
            emailjs.sendForm('service_qufbpuo', 'template_4y8qqhm', currentForm , 'fxb823XzUHUso3VSh')
        .then((result) => {
            console.log(result.text)
            setStatus(true)
        },(error) => {
            console.log(error.text)
            setStatus(false)
        })
        setStatus(true);
        }
        
        
    }
    return(
        <div className="contact-form-container" id="contact">
            {formStatus === false ? <Warning /> : null}
            {formStatus === true ? <Success /> : null}
            <form className="contact-form" ref={form} onSubmit={(e: React.SyntheticEvent) => {handleSubmit(e)}}>
                <div className="form-group">
                <h3>Contact</h3>
                <label>Name</label>
                <input className="form-control" type="text" placeholder="Your name" name="to_name" value={name} onChange={(e) => setName(e.target.value)}></input>
                
                <label>Email</label>
                <input className="form-control" type="email" placeholder="name@example.com" name="from_name" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                
                <label>Your Message</label>
                <textarea className="form-control" rows={parseFloat("3")} placeholder="Type something..." name="message" value={content} onChange={(e) => setContent(e.target.value)}></textarea>

                <button type="submit" value="Send" className="btn btn-success">Send</button>
                </div>     
            </form>
        </div>
    )
}
export default Contact;