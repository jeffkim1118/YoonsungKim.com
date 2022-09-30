import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Warning from "./warning";

function Contact(){
    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[msg, setMsg] = useState();
    
    function handleSubmit(){

    }

    return(
        <div>
            <form onSubmit={() => {handleSubmit()}}>
                <label>Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="email"></input>
                <label>Your Message</label>
                <input type="text"></input>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
export default Contact;