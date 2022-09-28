import React from "react";
import Pic2 from "../images/pic2.jpg";

function Introduction(){
    return(
        <div className="intro-container">
            <img src={Pic2} alt="me" style={{width: '200px', height: '250px'}}/>
            <p>Hi, my name is Yoonsung Kim 
            Born in South Korea, raised in New York. I graduated from CUNY Baruch College, 
            Zicklin School of Business as a Computer Information Systems major in 2021. I spent my time,
            after college, to figure out what do I want to do with my life. Then, I decided to become a 
            Software Engineer to work in business and technology field. I started out my coding journey 
            with self-learning HTML, CSS, and JavaScript. Then, I moved on to learning a 
            JavaScript framework called REACT JS. Here's my first personal website project that 
            I worked on before building this website: First version of my website. I moved on further in learning 
            by attending Flatiron School Software Engineering program and graduated in 2022.</p>
        </div>
    )
}
export default Introduction;