import React from 'react';
import portfolioImage1 from '../../assets/cover/Fuzzy-Friends.png';
import portfolioImage2 from '../../assets/cover/Mustache-Mustangs.png';
import portfolioImage3 from '../../assets/cover/Password-Generator.png';
import portfolioImage4 from '../../assets/cover/Weather-Dashboard.png';
import portfolioImage5 from '../../assets/cover/Work-Day-Scheduler.png';
import portfolioImage6 from '../../assets/cover/regex.png';

function Portfolio () {
    return(
        // Portfolio showcase begins
        <section className="my-5">
            <h1 id="portfolio"><em>Portfolio</em></h1>
            <p> A selection of my work </p>
        <div className="portfolio" style={{ width: "50% "}}>
            
        <a href="https://kamacasta.github.io/Fuzzy-Friend-Finder/" target="_blank" className="portfolio-item">
                <img src={portfolioImage1} className="portfolio-img" alt="One of 6 images of kamas portfolio images"
                rel="noreferrer"/>
            </a>

        <a href="https://mustache-mustangs.herokuapp.com/"  target="_blank" className="portfolio-item">
                <img src={portfolioImage2} className="portfolio-img" alt="Two of 6 images of kamas portfolio images" rel="noreferrer"/>
        </a>

        <a href="https://kamacasta.github.io/Friendly-Parakeet_PW/" target="_blank" className="portfolio-item">
                <img src={portfolioImage3} className="portfolio-img" alt="Three of 6 images of kamas portfolio images" rel="noreferrer"/>
            </a>

        <a href="https://kamacasta.github.io/Weather-Dashboard/"  target="_blank" className="portfolio-item">
                <img src={portfolioImage4} className="portfolio-img" alt="Four of 6 images of kamas portfolio images" rel="noreferrer"/>
        </a>

        <a href="https://kamacasta.github.io/Work-Day-Scheduler/"  target="_blank" className="portfolio-item">
                <img src={portfolioImage5} className="portfolio-img" alt="Five of 6 images of kamas portfolio images" rel="noreferrer"/>
            </a>

        <a href="https://gist.github.com/kamacasta" className="portfolio-item">
                <img src={portfolioImage6} className="portfolio-img" alt="Six of 6 images of kamas portfolio images" rel="noreferrer"/>
        </a>
        
        </div>

        </section>
        // Portfolio showcase ends
    );
};


export default Portfolio;