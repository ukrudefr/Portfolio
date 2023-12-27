import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'




export default function Contacts() {

	return (
		<section id="contact" className="contact-section">
      <div className="contact-links">
        <a
          href="https://linkedin.com/in/tatiana-schmitt-659703221"
          target="_blank"
          className="btn contact-details"
			 rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        </a>
        <a
          id="profile-link"
          href="https://github.com/ukrudefr"
          target="_blank"
          className="btn contact-details"
			 rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x"/>
        </a>
        <a href="mailto:ukrudefr@gmail.com" className="btn contact-details">
          <FontAwesomeIcon icon={faEnvelope} size="2x"/>
        </a>
      </div>
    </section>
	)
}