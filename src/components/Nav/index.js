import React from 'react';


function Nav() {
  

  

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          {/* <span></span> <em>Kamakanui'aha'ilono Castaneda</em> */}
        </a>
      </h2>
      <nav id="navbar">
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" className="navActive" >
              About me
            </a>
          </li>
          <li className={`mx-2`}>
          <a data-testid="portfolio" href="#portfolio" className="navActive" >
            Portfolio
            </a>
          </li>
          <li className={`mx-2`}>
          <a data-testid="resume" href="#resume" className="navActive">
            Resume
            </a>
          </li>
          <li className={`mx-2`}>
          <a data-testid="contact" href="#contact" className="navActive" >
            Contact
            </a>
          </li>
          
          
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
