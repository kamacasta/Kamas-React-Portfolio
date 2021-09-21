import React from 'react';
import portfolioImage1 from '../../assets/cover/Fuzzy-Friends.png';
import portfolioImage2 from '../../assets/cover/Mustache-Mustangs.png';
import portfolioImage3 from '../../assets/cover/Password-Generator.png';
import portfolioImage4 from '../../assets/cover/Weather-Dashboard.png';
import portfolioImage5 from '../../assets/cover/Work-Day-Scheduler.png';
// import portfolioImage6from '../../assets/cover/';

function Portfolio () {
    return(
        <section className="my-5">
            <h1 id="portfolio"><em>Portfolio</em></h1>
            <p> A selection of my work </p>
        <div className="portfolio" style={{ width: "50% "}}>
            
        <a href="https://kamacasta.github.io/Fuzzy-Friend-Finder/" target="_blank" className="portfolio-item">
                <img src={portfolioImage1} className="portfolio-img" alt=""/>
            </a>

        <a href="https://mustache-mustangs.herokuapp.com/"  target="_blank" className="portfolio-item">
                <img src={portfolioImage2} className="portfolio-img"/>
        </a>

        <a href="https://kamacasta.github.io/Friendly-Parakeet_PW/" target="_blank" className="portfolio-item">
                <img src={portfolioImage3} className="portfolio-img"/>
            </a>

        <a href="https://kamacasta.github.io/Weather-Dashboard/"  target="_blank" className="portfolio-item">
                <img src={portfolioImage4} className="portfolio-img"/>
        </a>

        <a href="https://kamacasta.github.io/Work-Day-Scheduler/"  target="_blank" className="portfolio-item">
                <img src={portfolioImage5} className="portfolio-img"/>
            </a>

        {/* <a href="" className="portfolio-item">
                <img src={portfolioImage6} className="portfolio-img"/>
        </a>
         */}
        
        </div>

        </section>
    );
};


export default Portfolio;