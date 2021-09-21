import React from "react"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Footer() {
    return (
      <div className="footer">
        <div className="contactInfo">
          <a
            className="contactLogo"
            href="https://github.com/kamacasta"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            className="contactLogo"
            href="https://www.linkedin.com/in/kamajcasta/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    );
}

export default Footer;