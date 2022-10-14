import Gdwatcher from '../images/gdwatcher.jpg';
import Bloggy from '../images/bloggy.jpg';
import Ezweather from '../images/ezweather.jpg';

function Portfolios(){
    return(
        <div className="portfolioSection" id="portfolio">
        <h1 className='showcase-title'>Portfolio Showcase</h1>
            <div className="portfolios">  
            
                <div className="first" id="portfolio">                 
                    <img src={Gdwatcher} alt="gdwatcher" id='portfolio-pic'/>
                    <h3>GD Watcher</h3>
                    <p>Web app to display all video games deals in many online stores. Also, it creates watchlist to keep track of demanded video games to purchase.</p>
                    <a href="https://github.com/jeffkim1118/game-deals-watcher" target="_blank" rel="noreferrer" type="button" className="btn btn-primary" style={{margin:"10px"}}>Github</a>
                    <a href="https://youtu.be/QcDN3Q0TgCU" target="_blank" rel="noreferrer" type="button" className="btn btn-primary">Demo</a>
                </div>
                <div className="second" id="portfolio">    
                    <img src={Bloggy} alt="bloggy" id='portfolio-pic'/>
                    <h3>Bloggy</h3>
                    <p>A blogging web application built with React and Ruby on Rails frameworks. It utilizes PostgreSQL database to store users' credential and their blog posts. Implemented authentication and validation methods to make sure right user has right to make changes to their posts.</p>
                    <a href="https://github.com/jeffkim1118/blog-website" target="_blank" rel="noreferrer" type="button" className="btn btn-primary" style={{margin:"10px"}}>Github</a>
                    <a href="https://youtu.be/q6O9js6K6sY" target="_blank" rel="noreferrer" type="button" className="btn btn-primary">Demo</a>
                </div>
                <div className="third" id="portfolio">               
                    <img src={Ezweather} alt="ez-weather" id='portfolio-pic'/>
                    <h3>Ez Weather</h3>
                    <p>A weather web application built with HTML5, CSS3, and JavaScript. It provides temperature and weather conditions of cities that are searched.</p>
                    <a href="https://github.com/jeffkim1118/EZ-Weather" target="_blank" rel="noreferrer" type="button" className="btn btn-primary" style={{margin:"10px"}}>Github</a>
                    <a href="https://youtu.be/d6Tzqg8BWzc" target="_blank" rel="noreferrer" type="button" className="btn btn-primary">Demo</a>
                </div>
            </div>
        </div>
    )
}
export default Portfolios;