import Pic2 from "../images/pic2.jpg";

function Introduction(){
    return(
        <div className="card-container" id="about">
            <div className="intro-section">
                <img className="personal-pic" src={Pic2} style={{width:"300px"}} alt="me"/>
                <div className="card-body">
                <p className="lead" style={{width:"100%",margin:"auto"}}>Hi, my name is Yoonsung Kim 
                Born in South Korea, raised in New York. I graduated from CUNY Baruch College, 
                Zicklin School of Business as a Computer Information Systems major in 2021.
                I started out my coding journey 
                with self-learning HTML, CSS, and JavaScript. Then, I moved on further in learning 
                by attending Flatiron School Software Engineering program and graduated in 2022.</p>
                </div>
            </div>
        </div>
    )
}
export default Introduction;