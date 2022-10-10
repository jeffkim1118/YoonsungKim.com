import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Warning from "./warning";

function Contact(){
    const[formStatus, setStatus] = React.useState<boolean>();
    const form = useRef(null);
    function handleSubmit(e: any){
        e.preventDefault();
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
    }
    return(
        <div className="contact-form-container" id="contact">
            {formStatus === false ? <Warning /> : null}
            <form className="contact-form" ref={form} onSubmit={(e: React.SyntheticEvent) => {handleSubmit(e)}}>
                <div className="form-group">
                <h3>Contact</h3>
                <label>Name</label>
                <input className="form-control" type="text" placeholder="Your name" name="to_name"></input>
                
                <label>Email</label>
                <input className="form-control" type="email" placeholder="name@example.com" name="from_name"></input>
                
                <label>Your Message</label>
                <textarea className="form-control" rows={parseFloat("3")} placeholder="Type something..." name="message" ></textarea>

                <button type="submit" value="Send" className="btn btn-success">Send</button>
                </div>     
            </form>
        </div>
    )
}
export default Contact;