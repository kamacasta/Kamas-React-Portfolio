import React from 'react';


function Nav() {
  

  

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
        </a>
      </h2>
      {/* Navbar begins */}
      <nav id="navbar">
        <ul className="flex-row">
          <li className="mx-2">
            {/* About Navbar item */}
            <a data-testid="about" href="#about" className="navActive" >
              About me
            </a>
          </li>
          {/* Portfolio Navbar item */}
          <li className={`mx-2`}>
          <a data-testid="portfolio" href="#portfolio" className="navActive" >
            Portfolio
            </a>
          </li>
          {/* Resume  Navbar Item */}
          <li className={`mx-2`}>
          <a data-testid="resume" href="#resume" className="navActive">
            Resume
            </a>
          </li>
          {/* Contact Navbar item */}
          <li className={`mx-2`}>
          <a data-testid="contact" href="#contact" className="navActive" >
            Contact
            </a>
          </li>
          
          
        </ul>
      </nav>
      {/* Navbar ends */}
    </header>
  );
}

export default Nav;
