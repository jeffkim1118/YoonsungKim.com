import Mail from "../images/mail.png"
import Github from "../images/github-sign.png"
import Linkedin from "../images/linkedin.png"
import Medium from "../images/medium.png"

function Footer(){
    return(
        <div className="footer-section">
            <div className="footer">
                <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#49;&#48;&#49;&#57;&#121;&#115;&#107;&#105;&#109;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"><img src={Mail}alt="mail" className="email-icon" id="links"></img></a>
                <a href="https://github.com/jeffkim1118" className="github" ><img src={Github} alt="github" id="links"></img></a>
                <a href="https://www.linkedin.com/in/yoonsung-kim-639b30178/" className="linkedin"><img src={Linkedin} alt="github" id="links"></img></a>
                <a href="https://medium.com/@1019yskim" className="medium"><img src={Medium} alt="github" id="links"></img></a>
            </div>
        </div>
    )
}
export default Footer;