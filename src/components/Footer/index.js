import React from "react"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import  PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import { Phone } from "@material-ui/icons";


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
          <a href="tel:623-326-1158">
              <PhoneIphoneIcon />
          </a>
        </div>
      </div>
    );
}

export default Footer;