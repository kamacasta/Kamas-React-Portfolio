import React from "react"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import  PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";



function Footer() {
    return (
      <footer className="footer">
        <div className="contactInfo">
            {/* GitHub icon imported above */}
          <a
            className="contactLogo"
            href="https://github.com/kamacasta"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          {/* LinkedIn icon imported above */}
          <a
            className="contactLogo"
            href="https://www.linkedin.com/in/kamajcasta/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          {/* Iphone icone imported above */}
          <a href="tel:623-326-1158">
              <PhoneIphoneIcon />
          </a>
        </div>
      </footer>
    );
}

export default Footer;