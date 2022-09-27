import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Warning from "./warning";

function Contact(){
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");
    const[status, setStatus] = useState(true);

    const form = useRef();

    function handleSubmit(e: React.ChangeEvent<HTMLInputElement>){
        e.preventDefault();
        if(name === "" || email === "" || message === ""){
            setStatus(false);
        }else{
            emailjs.sendForm('service_qufbpuo', 'template_4y8qqhm', form.current!, 'BYtwJwTOulJN4yq_L')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                console.log("message sent");
            }, (error) => {
            console.log(error.text);
            });
        }
    }

    return(
        <div className="email-form-container">
            <h1>Contact Me</h1>
            {!status ? <Warning /> : null}
            <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Email</label>
                <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Message</label>
                <textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}
export default Contact;